document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            // Close all other articles
            document.querySelectorAll(".content").forEach(content => {
                if (content !== targetContent) {
                    content.classList.remove("visible");
                }
            });

            // Toggle the visibility of the clicked article
            targetContent.classList.toggle("visible");
        });
    });
  });

  function showPdf(pdfPath) {
      const pdfFrame = document.getElementById('pdf-frame');
      if (pdfFrame) {
          pdfFrame.src = pdfPath;
      } else {
          console.error('PDF frame not found');
      }
  }
