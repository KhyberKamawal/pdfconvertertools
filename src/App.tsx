import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ImageToPDF from './pages/ImageToPDF';
import CompressPDF from './pages/CompressPDF';
import MergePDFs from './pages/MergePDFs';
import SplitPDF from './pages/SplitPDF';
import JPGToPNG from './pages/JPGToPNG';
import WordToPDF from './pages/WordToPDF';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/compress-pdf" element={<CompressPDF />} />
          <Route path="/merge-pdfs" element={<MergePDFs />} />
          <Route path="/split-pdf" element={<SplitPDF />} />
          <Route path="/jpg-to-png" element={<JPGToPNG />} />
          <Route path="/word-to-pdf" element={<WordToPDF />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;