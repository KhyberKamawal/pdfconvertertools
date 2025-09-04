import React from 'react';
import FileConverter from '../components/FileConverter';

const CompressPDF: React.FC = () => {
  return (
    <div className="py-8">
      <FileConverter
        title="Compress PDF Files"
        description="Reduce the file size of your PDF documents while maintaining quality. Perfect for sharing via email or uploading to websites with size restrictions."
        acceptedTypes={['application/pdf']}
        apiEndpoint="/api/compress/pdf"
        multiple={false}
        uploadFieldName="pdf"
      />
      
      {/* Additional Information */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">Compression Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3 text-green-800">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <p>Smaller file sizes for easier sharing</p>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <p>Faster upload and download times</p>
              </div>
            </div>
            <div className="space-y-3 text-green-800">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <p>Maintains document quality</p>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <p>Saves storage space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompressPDF;