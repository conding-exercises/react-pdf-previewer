// src/components/FileTable.js

import React from 'react';

function FileTable({ files, onPreviewClick, onDownloadClick }) {
  const handlePreviewClick = (file) => {
    console.log('FileTable -> Preview button clicked for:', file);
    onPreviewClick(file); // Call the provided callback
  };
  return (
    <table style={{ border: '1px solid blue' }}>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Preview</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr key={index}>
            <td>{file.name}</td>
            <td>
              {/* <button onClick={() => onPreviewClick(file)}>Preview</button> */}
              <button onClick={() => handlePreviewClick(file)}>Preview</button>
            </td>
            <td>
              <button onClick={() => onDownloadClick(file)}>Download</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FileTable;

