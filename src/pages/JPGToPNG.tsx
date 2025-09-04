import React from 'react';
import FileConverter from '../components/FileConverter';

const JPGToPNG: React.FC = () => {
  return (
    <div className="py-8">
      <FileConverter
        title="Convert JPG to PNG"
        description="Convert your JPG images to PNG format for better transparency support and lossless compression. Ideal for graphics and images that need transparent backgrounds."
        acceptedTypes={['image/jpeg', 'image/jpg']}
        apiEndpoint="/api/convert/jpg-to-png"
        multiple={false}
        uploadFieldName="image"
      />
      
      {/* Additional Information */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-pink-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-pink-900 mb-4">JPG vs PNG</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-pink-900 mb-2">JPG Format</h4>
              <ul className="space-y-1 text-pink-800 text-sm">
                <li>• Smaller file sizes</li>
                <li>• Lossy compression</li>
                <li>• No transparency support</li>
                <li>• Best for photos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-pink-900 mb-2">PNG Format</h4>
              <ul className="space-y-1 text-pink-800 text-sm">
                <li>• Lossless compression</li>
                <li>• Transparency support</li>
                <li>• Better for graphics</li>
                <li>• Larger file sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPGToPNG;