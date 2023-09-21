// src/components/PdfPreview.js

import React, { useEffect, useRef } from 'react';
import pdfjs from 'pdfjs-dist';

function PdfPreview({ file }) {
  const canvasRef = useRef(null);
  console.log('Preview component is triggered for:', file.name);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(file.url);

      try {
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPdf();
  }, [file]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default PdfPreview;
