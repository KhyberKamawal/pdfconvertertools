import React from 'react';
import FileConverter from '../components/FileConverter';

const WordToPDF: React.FC = () => {
  return (
    <div className="py-8">
      <FileConverter
        title="Convert Word to PDF"
        description="Convert Microsoft Word documents (DOC, DOCX) to PDF format. Preserve formatting and create universally readable documents that can be viewed on any device."
        acceptedTypes={[
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]}
        apiEndpoint="/api/convert/word-to-pdf"
        multiple={false}
        uploadFieldName="document"
      />
      
      {/* Additional Information */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">Why Convert to PDF?</h3>
          <div className="space-y-3 text-indigo-800">
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-indigo-200 rounded-full text-indigo-900 text-sm font-medium text-center mr-3 mt-0.5">✓</span>
              <p>Universal compatibility - opens on any device</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-indigo-200 rounded-full text-indigo-900 text-sm font-medium text-center mr-3 mt-0.5">✓</span>
              <p>Preserves original formatting and layout</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-indigo-200 rounded-full text-indigo-900 text-sm font-medium text-center mr-3 mt-0.5">✓</span>
              <p>Prevents accidental editing</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-indigo-200 rounded-full text-indigo-900 text-sm font-medium text-center mr-3 mt-0.5">✓</span>
              <p>Professional presentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordToPDF;