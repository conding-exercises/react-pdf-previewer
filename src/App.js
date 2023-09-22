// src/App.js

import React, { useState, useEffect } from 'react';
import FileTable from './components/FileTable';
// import PdfPreview from './components/PdfPreview';
import CertPreviewer from './CertPreviewer';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);


  const files = [
    { name: 'frm', description: 'GARP FRM'},
    { name: 'mfe', description: 'meta front end'},
    // Add more files as needed
  ];

  const handlePreviewClick = (file) => {
    setSelectedFile(file);
    console.log('handlePreviewClick -> the updated selectedFile:', { selectedFile });


  };

  useEffect(() => {
    console.log('useEffect -> the updated selectedFile:', selectedFile);
  }, [selectedFile]);

  return (
    <div>
      <FileTable files={files} onPreviewClick={handlePreviewClick} />
      {selectedFile ? <CertPreviewer file={selectedFile}/> : null}

    </div>

  );
}

export default App;
