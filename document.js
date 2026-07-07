import "./document.css";

const PDF_TITLE = "The MaxL System";

const downloadBtn = document.getElementById("download-pdf");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const previousTitle = document.title;
    document.title = PDF_TITLE;
    window.print();
    document.title = previousTitle;
  });
}
