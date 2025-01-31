  function showPdf(pdfPath, event) {
    if (event) {
        event.preventDefault();
    }
      const pdfFrame = document.getElementById('pdf-frame');
      if (pdfFrame) {
          pdfFrame.src = pdfPath;
      } else {
          console.error('PDF frame not found');
      }
}
  
