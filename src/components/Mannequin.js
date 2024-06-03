import React from "react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import { colorToFilter } from "./utils/colorToFilter";

const Mannequin = () => {
  const customization = useSelector((state) => state.customization);
  const filter = customization.color
    ? colorToFilter(customization.color)
    : "none";

  // const handleExport = () => {
  //   const input = document.getElementById("mannequin-image");
  //   html2canvas(input, { useCORS: true }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save("mannequin-customization.pdf");
  //   });
  // };
  const handleExport = () => {
    const element = document.getElementById("mannequin-image");
    html2pdf().from(element).save();
  };

  return (
    <div className="mannequin">
      <div id="mannequin-image" className="mannequin-image">
        <img className="body" src="../assets/Layer1.png" />
        {customization.styleImage && (
          <div className="style-container">
            <img
              src={customization.styleImage}
              alt={customization.style}
              className="layer style-layer"
              style={{ filter, zIndex: 1 }}
            />
          </div>
        )}
        {customization.embroideryImage && (
          <div className="embroidery-container">
            <img
              src={customization.embroideryImage}
              alt={customization.embroidery}
              className="layer embroidery-layer"
              style={{ zIndex: 1 }}
            />
          </div>
        )}
        {customization.dupattaStyleImage && (
          <div className="dupatta-style-container">
            <img
              src={customization.dupattaStyleImage}
              alt={customization.embroidery}
              className="layer dupatta-style-layer"
              style={{ filter, zIndex: 2 }}
            />
          </div>
        )}
        {customization.dupattaEmbroideryImage && (
          <div className="dupatta-embroidery-container">
            <img
              src={customization.dupattaEmbroideryImage}
              alt={customization.embroidery}
              className="layer dupatta-embroidery-layer"
              style={{ zIndex: 2 }}
            />
          </div>
        )}

        {customization.blouseStyleImage && (
          <div className="blouse-style-container">
            <img
              src={customization.blouseStyleImage}
              alt="Blouse Style"
              className="layer blouse-style-layer"
              style={{ filter, zIndex: 3 }}
            />
          </div>
        )}
        {customization.blouseEmbroideryImage && (
          <div className="blouse-embroidery-container">
            <img
              src={customization.blouseEmbroideryImage}
              alt="Blouse Embroidery"
              className="layer blouse-embroidery-layer"
              style={{ zIndex: 3 }}
            />
          </div>
        )}
      </div>

      <button className="exportButton" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};

export default Mannequin;
