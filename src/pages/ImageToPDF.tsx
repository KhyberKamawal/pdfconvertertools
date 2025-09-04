import React from 'react';
import FileConverter from '../components/FileConverter';

const ImageToPDF: React.FC = () => {
  return (
    <div className="py-8">
      <FileConverter
        title="Convert Images to PDF"
        description="Transform your JPG, PNG, and WEBP images into a single PDF document. Perfect for creating photo albums, portfolios, or combining multiple images into one file."
        acceptedTypes={['image/jpeg', 'image/jpg', 'image/png', 'image/webp']}
        apiEndpoint="/api/convert/image-to-pdf"
        multiple={true}
        maxFiles={20}
        uploadFieldName="images"
      />
      
      {/* Additional Information */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">How it works</h3>
          <div className="space-y-3 text-blue-800">
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-200 rounded-full text-blue-900 text-sm font-medium text-center mr-3 mt-0.5">1</span>
              <p>Select multiple images (JPG, PNG, WEBP) up to 50MB each</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-200 rounded-full text-blue-900 text-sm font-medium text-center mr-3 mt-0.5">2</span>
              <p>Images are automatically optimized and arranged in a PDF</p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-200 rounded-full text-blue-900 text-sm font-medium text-center mr-3 mt-0.5">3</span>
              <p>Download your PDF with all images combined</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToPDF;