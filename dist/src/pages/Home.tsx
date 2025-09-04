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
    github: "https://github.com/yourusername",
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
      <div className="px-4 py-8 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:flex-shrink-0 p-6 flex items-center justify-center md:justify-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center">
                  <User className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <Terminal className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">About the Developer</h2>
                </div>
                
                <h3 className="text-xl font-bold text-indigo-700">{developerInfo.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{developerInfo.title}</p>
                
                <p className="text-gray-700 mb-5">
                  {developerInfo.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Code className="h-5 w-5 text-indigo-600 mr-2" />
                    Technical Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {developerInfo.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={developerInfo.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Portfolio
                  </a>
                  <a 
                    href={developerInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center"
                  >
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={developerInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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