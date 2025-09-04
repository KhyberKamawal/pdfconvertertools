import React from 'react';
import { Link } from 'react-router-dom';
import { FileImage, FileText, Compass as Compress, Merge, Split, RefreshCw, ArrowRight, Shield, Zap, Cloud, Code, Globe, Terminal, User } from 'lucide-react';

const Home: React.FC = () => {
  const tools = [
    {
      name: 'Image to PDF',
      description: 'Convert JPG, PNG, WEBP images to PDF format',
      icon: FileImage,
      href: '/image-to-pdf',
      color: 'bg-blue-500'
    },
    {
      name: 'Compress PDF',
      description: 'Reduce PDF file size while maintaining quality',
      icon: Compress,
      href: '/compress-pdf',
      color: 'bg-green-500'
    },
    {
      name: 'Merge PDFs',
      description: 'Combine multiple PDF files into one document',
      icon: Merge,
      href: '/merge-pdfs',
      color: 'bg-purple-500'
    },
    {
      name: 'Split PDF',
      description: 'Split PDF into individual pages or page ranges',
      icon: Split,
      href: '/split-pdf',
      color: 'bg-orange-500'
    },
    {
      name: 'JPG to PNG',
      description: 'Convert JPG images to PNG format',
      icon: RefreshCw,
      href: '/jpg-to-png',
      color: 'bg-pink-500'
    },
    {
      name: 'Word to PDF',
      description: 'Convert Word documents to PDF format',
      icon: FileText,
      href: '/word-to-pdf',
      color: 'bg-indigo-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'All files are processed securely and automatically deleted after conversion'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Lightning-fast conversion with optimized processing algorithms'
    },
    {
      icon: Cloud,
      title: 'No Installation',
      description: 'Use directly in your browser without downloading any software'
    }
  ];

  const developerInfo = {
    name: "Khyber Kamawal",
    title: "Full Stack Web Developer",
    description: "I specialize in creating efficient, user-friendly web applications with modern technologies. Passionate about solving real-world problems through clean code and intuitive interfaces.",
    skills: ["React", "Node.js", "TypeScript", "Python", "UI/UX Design"],
    portfolio: "https://yourportfolio.com",
    github: "https://github.com/KhyberKamawal",
    linkedin: "https://linkedin.com/in/yourusername"
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="px-4 pt-6 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          File Converter Tools
        </h1>
        <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
          Professional-grade file conversion tools for all your document and image processing needs. 
          Fast, secure, and completely free to use.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/image-to-pdf"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="#tools"
            className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Browse Tools
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 py-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-5">
            Why Choose Our Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div id="tools" className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-5">
            Available Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  to={tool.href}
                  className="group bg-white rounded-lg shadow-sm hover:shadow transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <div className="p-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 ${tool.color} rounded-lg mb-2 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {tool.description}
                    </p>
                    <div className="mt-2 flex items-center text-blue-600 text-sm font-medium">
                      Try it now
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Developer Section */}
      <div className="px-6 py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="max-w-5xl mx-auto">
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/30 transition-transform hover:scale-[1.01]">
      <div className="md:flex">
        
        {/* Left Side Avatar */}
        <div className="md:flex-shrink-0 p-8 flex items-center justify-center md:justify-start bg-gradient-to-br from-indigo-100 via-white to-pink-100">
          <div className="bg-white/70 border-2 border-dashed rounded-2xl w-36 h-36 flex items-center justify-center shadow-md">
            <User className="h-20 w-20 text-indigo-500" />
          </div>
        </div>
        
        {/* Right Side Content */}
        <div className="p-8 md:p-10">
          <div className="flex items-center mb-5">
            <Terminal className="h-7 w-7 text-pink-600 mr-2" />
            <h2 className="text-3xl font-extrabold text-gray-900">About the Developer</h2>
          </div>

          <h3 className="text-2xl font-bold text-indigo-700">{developerInfo.name}</h3>
          <p className="text-lg text-gray-700 mb-4">{developerInfo.title}</p>

          <p className="text-gray-800 leading-relaxed mb-6">
            {developerInfo.description}
          </p>

          {/* Skills */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Code className="h-5 w-5 text-indigo-600 mr-2" />
              Technical Expertise
            </h4>
            <div className="flex flex-wrap gap-3">
              {developerInfo.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={developerInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center shadow-md hover:shadow-lg"
            >
              <Globe className="h-5 w-5 mr-2" />
              Portfolio
            </a>

            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all flex items-center shadow-md hover:shadow-lg"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..."
                />
              </svg>
              GitHub
            </a>

            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center shadow-md hover:shadow-lg"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761..." />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* FAQ Section */}
      <div className="px-4 py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Are my files secure?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, all files are processed securely on our servers and automatically deleted within 1 hour. 
                We don't store or access your files beyond the conversion process.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                What's the maximum file size?
              </h3>
              <p className="text-gray-600 text-sm">
                Each file can be up to 50MB in size. For multiple files, you can upload up to 20 files at once 
                depending on the tool you're using.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Do I need to create an account?
              </h3>
              <p className="text-gray-600 text-sm">
                No account required! All tools are available for immediate use without any registration or login.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
