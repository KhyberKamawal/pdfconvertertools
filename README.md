# File Converter Tools

A comprehensive web application for file conversion and manipulation, built with React and Node.js.

## Features

### Image Conversion
- **Image to PDF**: Convert JPG, PNG, WEBP images to PDF format
- **JPG to PNG**: Convert JPG images to PNG format with transparency support

### PDF Operations
- **Compress PDF**: Reduce PDF file size while maintaining quality
- **Merge PDFs**: Combine multiple PDF files into one document
- **Split PDF**: Split PDF into individual pages or page ranges

### Document Conversion
- **Word to PDF**: Convert DOC/DOCX documents to PDF format

## Technology Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API communication
- Lucide React for icons

### Backend
- Node.js with Express
- Multer for file uploads
- Sharp for image processing
- PDF-lib for PDF operations
- Mammoth for Word document handling
- Express Rate Limiting for security

## Quick Start

### Prerequisites
- Node.js 18+ installed
- NPM or Yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd file-converter-tools
```

2. **Install dependencies**
```bash
npm run setup
```

3. **Start development servers**
```bash
npm run dev
```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:5000

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=52428800
UPLOAD_PATH=./uploads
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=50
```

## API Endpoints

### Image Conversion
- `POST /api/convert/image-to-pdf` - Convert images to PDF
- `POST /api/convert/jpg-to-png` - Convert JPG to PNG
- `POST /api/convert/png-to-jpg` - Convert PNG to JPG

### PDF Operations
- `POST /api/compress/pdf` - Compress PDF files
- `POST /api/merge/pdfs` - Merge multiple PDFs
- `POST /api/split/pdf` - Split PDF into pages

### Document Conversion
- `POST /api/convert/word-to-pdf` - Convert Word to PDF
- `POST /api/convert/pdf-to-word` - Convert PDF to Word (limited)

### System
- `GET /api/health` - Health check endpoint

## File Upload Limits

- Maximum file size: 50MB per file
- Maximum files per request: 20 (varies by endpoint)
- Supported formats: PDF, DOC, DOCX, JPG, PNG, WEBP
- Automatic cleanup: Files deleted after 1 hour

## Security Features

- File type validation
- File size limits
- Rate limiting (50 requests per 15 minutes)
- CORS protection
- Helmet security headers
- Automatic file cleanup

## Deployment

### Frontend (Vercel)
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL`

### Backend (Railway/Render)
1. Connect your repository
2. Set root directory to `backend`
3. Add environment variables from `.env.example`
4. Deploy using provided Dockerfile

## Development

### Project Structure
```
file-converter-tools/
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   └── ...
├── backend/               # Express backend
│   ├── routes/           # API routes
│   ├── uploads/          # Temporary file storage
│   └── ...
├── public/               # Static assets
└── ...
```

### Available Scripts

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

#### Backend
- `npm run dev` - Start with nodemon
- `npm run start` - Start production server

#### Combined
- `npm run dev` - Start both frontend and backend
- `npm run setup` - Install all dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
1. Check the FAQ section in the app
2. Open an issue on GitHub
3. Contact support

## Roadmap

- [ ] PDF to Word conversion improvements
- [ ] Image format conversion (WEBP, BMP, TIFF)
- [ ] Batch processing improvements
- [ ] Advanced PDF operations (watermarks, signatures)
- [ ] User accounts and file history
- [ ] API rate limiting per user
- [ ] Mobile app development