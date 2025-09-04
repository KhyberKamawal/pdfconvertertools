import React from 'react';
import FileConverter from '../components/FileConverter';

const SplitPDF: React.FC = () => {
  return (
    <div className="py-8">
      <FileConverter
        title="Split PDF Files"
        description="Split a PDF document into individual pages or specific page ranges. Extract exactly what you need from larger documents."
        acceptedTypes={['application/pdf']}
        apiEndpoint="/api/split/pdf"
        multiple={false}
        uploadFieldName="pdf"
      />
      
      {/* Additional Information */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">Split Options</h3>
          <div className="space-y-4 text-orange-800">
            <div className="border-l-4 border-orange-300 pl-4">
              <h4 className="font-medium">Individual Pages</h4>
              <p className="text-sm">Split your PDF into separate files, one for each page.</p>
            </div>
            <div className="border-l-4 border-orange-300 pl-4">
              <h4 className="font-medium">Page Ranges (Coming Soon)</h4>
              <p className="text-sm">Specify custom page ranges to extract specific sections.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitPDF;