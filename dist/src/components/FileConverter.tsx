import React, { useState, useRef } from 'react';
import { Upload, Download, AlertCircle, CheckCircle, Loader, X, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface FileConverterProps {
  title: string;
  description: string;
  acceptedTypes: string[];
  apiEndpoint: string;
  multiple?: boolean;
  maxFiles?: number;
  uploadFieldName: string;
}

interface UploadedFile {
  file: File;
  id: string;
}

const FileConverter: React.FC<FileConverterProps> = ({
  title,
  description,
  acceptedTypes,
  apiEndpoint,
  multiple = false,
  maxFiles = 1,
  uploadFieldName
}) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = [];
    const fileArray = Array.from(selectedFiles);

    for (const file of fileArray) {
      if (!acceptedTypes.includes(file.type)) {
        setError(`Invalid file type: ${file.name}. Accepted types: ${acceptedTypes.join(', ')}`);
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        setError(`File too large: ${file.name}. Maximum size is 50MB.`);
        return;
      }

      newFiles.push({
        file,
        id: Math.random().toString(36).substr(2, 9)
      });
    }

    if (multiple) {
      setFiles(prev => [...prev, ...newFiles].slice(0, maxFiles));
    } else {
      setFiles(newFiles.slice(0, 1));
    }

    setError(null);
    setSuccess(null);
    setDownloadUrl(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeFile = (id: string) => {
    setFiles(files.filter(f => f.id !== id));
  };

  const convertFiles = async () => {
    if (files.length === 0) {
      setError('Please select files to convert');
      return;
    }

    setIsConverting(true);
    setError(null);
    setSuccess(null);
    setProgress(0);

    try {
      const formData = new FormData();
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      if (multiple) {
        files.forEach(({ file }) => {
          formData.append(uploadFieldName, file);
        });
      } else {
        formData.append(uploadFieldName, files[0].file);
      }

      const response = await axios.post(
        `${API_BASE_URL}${apiEndpoint}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          responseType: 'blob',
          onUploadProgress: (progressEvent) => {
            const loaded = progressEvent.loaded || 0;
            const total = progressEvent.total || loaded || 1;
            const percentCompleted = Math.min(100, Math.max(0, Math.round((loaded * 100) / total)));
            setProgress(percentCompleted);
          },
        }
      );

      const contentType = response.headers['content-type'] || '';

      if (contentType.includes('application/pdf') || contentType.includes('application/zip')) {
        const blob = new Blob([response.data], { type: contentType });
        const url = window.URL.createObjectURL(blob);
        setDownloadUrl(url);

        let filename = contentType.includes('zip') ? 'converted.zip' : 'converted.pdf';
        const contentDisposition = response.headers['content-disposition'];
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="?([^"]+)"?/);
          if (match) {
            filename = match[1];
          }
        }

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setSuccess(
          contentType.includes('zip')
            ? 'Conversion completed! ZIP file downloaded with individual PDFs.'
            : 'Conversion completed successfully!'
        );
      } else if (contentType.includes('text/plain') || contentType.includes('application/json')) {
        const errorText = await new Response(response.data).text();
        try {
          const errorData = JSON.parse(errorText);
          setError(errorData.error || 'Conversion failed');
        } catch {
          setError(errorText || 'Conversion failed');
        }
      } else {
        setError(`Unexpected response type: ${contentType}`);
      }

    } catch (err: any) {
      if (err.response?.data) {
        try {
          if (err.response.data instanceof Blob) {
            const errorText = await err.response.data.text();
            try {
              const errorData = JSON.parse(errorText);
              setError(errorData.error || 'Conversion failed');
            } catch {
              setError(errorText || 'Conversion failed');
            }
          } else {
            setError(err.response.data.error || 'Conversion failed');
          }
        } catch {
          setError('Conversion failed. Please try again.');
        }
      } else {
        if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
          setError('Unable to connect to the server. Please check your connection and try again.');
        } else {
          setError(err.message || 'Conversion failed. Please try again.');
        }
      }
    } finally {
      setIsConverting(false);
      setProgress(0);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        <div className="p-6">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg text-gray-600 mb-2">
              {multiple ? 'Drop files here or click to select' : 'Drop file here or click to select'}
            </p>
            <p className="text-sm text-gray-500">
              Accepted formats: {acceptedTypes.map(type => type.split('/')[1]).join(', ')}
            </p>
            {multiple && (
              <p className="text-sm text-gray-500 mt-1">Maximum {maxFiles} files, 50MB each</p>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple={multiple}
            accept={acceptedTypes.join(',')}
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />

          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Selected Files</h3>
              <div className="space-y-2">
                {files.map(({ file, id }) => (
                  <div key={id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                    <button
                      onClick={() => removeFile(id)}
                      className="ml-4 p-1 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isConverting && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Converting...</span>
                <span className="text-sm text-gray-700">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-green-700">{success}</p>
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button
              onClick={convertFiles}
              disabled={files.length === 0 || isConverting}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
            >
              {isConverting ? (
                <>
                  <Loader className="animate-spin h-5 w-5 mr-2" />
                  Converting...
                </>
              ) : (
                <>
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Convert Files
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileConverter;
