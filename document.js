import "./document.css";

const downloadBtn = document.getElementById("download-pdf");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => window.print());
}
