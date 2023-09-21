// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileTable from './components/FileTable';
import PdfPreview from './components/PdfPreview';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    { name: 'FRM', url: './assets/FRM.pdf' },
    { name: 'File 2', url: '/assets/2023-06-15 Intro Front End.pdf' },
    // Add more files as needed
  ];

  const handlePreviewClick = (file) => {
    setSelectedFile(file);
    // console.log('Preview button clicked for:', file);
    console.log('handlePreviewClick -> the updated selectedFile:', {selectedFile});

  };
  
  useEffect(() => {
    console.log('useEffect -> the updated selectedFile:', selectedFile);
  }, [selectedFile]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FileTable
            files={files} onPreviewClick={handlePreviewClick} onDownloadClick={(file) => {
              // Implement download logic here

            }}
          />}>
        </Route>

        <Route path="/preview" element={selectedFile? <PdfPreview file={selectedFile}/> : null}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
