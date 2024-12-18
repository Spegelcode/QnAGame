document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-button");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const targetId = button.getAttribute("data-target");
          const targetContent = document.getElementById(targetId);

          // Close all other articles
          document.querySelectorAll(".content").forEach(content => {
              if (content.id !== targetId) {
                  content.style.display = "none";
              }
          });

          // Toggle the visibility of the clicked article
          if (targetContent.style.display === "block") {
              targetContent.style.display = "none";
          } else {
              targetContent.style.display = "block";
          }
      });
  });
});

function showPdf(pdfPath) {
  document.getElementById('pdf-frame').src = pdfPath;
  document.getElementById('pdf-container');
}
