import React from 'react';
import FileConverter from '../components/FileConverter';

const MergePDFs: React.FC = () => {
  return (
    <div className="py-8">
      <FileConverter
        title="Merge PDF Files"
        description="Combine multiple PDF documents into a single file. Useful for creating comprehensive reports, merging chapters, or consolidating related documents."
        acceptedTypes={['application/pdf']}
        apiEndpoint="/api/merge/pdfs"
        multiple={true}
        maxFiles={10}
        uploadFieldName="pdfs"
      />
      
      {/* Additional Information */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">Merge Features</h3>
          <div className="space-y-3 text-purple-800">
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-purple-200 rounded-full text-purple-900 text-sm font-medium text-center mr-3 mt-0.5">•</span>
              <p>Combine up to 10 PDF files at once</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-purple-200 rounded-full text-purple-900 text-sm font-medium text-center mr-3 mt-0.5">•</span>
              <p>Files are merged in the order you upload them</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-purple-200 rounded-full text-purple-900 text-sm font-medium text-center mr-3 mt-0.5">•</span>
              <p>All pages from each PDF are preserved</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-purple-200 rounded-full text-purple-900 text-sm font-medium text-center mr-3 mt-0.5">•</span>
              <p>Original formatting and quality maintained</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergePDFs;