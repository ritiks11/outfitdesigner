import React from "react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { colorToFilter } from "./utils/colorToFilter";

const Mannequin = () => {
  const customization = useSelector((state) => state.customization);
  const filter = customization.color
    ? colorToFilter(customization.color)
    : "none";

  const handleExport = () => {
    const input = document.getElementById("mannequin-image");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("mannequin-customization.pdf");
    });
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
              style={{ filter }}
            />
          </div>
        )}
        {/* {customization.color && customization.styleImage && (
          <div
            className="layer color-layer"
            style={{ backgroundColor: customization.color }}
          />
        )} */}

        {customization.embroideryImage && (
          <div className="embroidery-container">
            <img
              src={customization.embroideryImage}
              alt={customization.embroidery}
              className="layer embroidery-layer"
              style={{ filter }}
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
