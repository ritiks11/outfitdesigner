import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colorToFilter } from "./utils/colorToFilter";

const Mannequin = () => {
  const canvasRef = useRef(null);
  const customization = useSelector((state) => state.customization);
  const selectedImage = useSelector((state) => state.selectedImage);
  const filter = customization.color
    ? colorToFilter(customization.color)
    : "none";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const mannequinImage = new Image();
    mannequinImage.src = "../assets/Layer1.png";

    mannequinImage.onload = () => {
      const x = (canvas.width - 300) / 2;
      const y = (canvas.height - 450) / 2;
      ctx.drawImage(mannequinImage, x, y, 300, 450);

      if (selectedImage) {
        const img = new Image();
        img.src = selectedImage;
        img.onload = () => {
          const imgX = (canvas.width - 300) / 2; // Center horizontally
          const imgY = (canvas.height - 450) / 2; // Start from the middle vertically
          ctx.drawImage(img, imgX, imgY, 300, 450);
        };
      }
    };
  }, [customization, selectedImage]);

  const handleExport = () => {
    const element = document.getElementById("myCanvas");
    // Create a new PDF document
    const pdf = new jsPDF("p", "pt", "a4"); // Use 'pt' for units and 'a4' for page size
    // Calculate dimensions and positioning
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = element.width;
    const canvasHeight = element.height;

    const x = (pdfWidth - canvasWidth) / 2; // Center horizontally
    const y = (pdfHeight - canvasHeight) / 2; // Center vertically

    // Convert canvas to image data URL
    const canvasDataUrl = element.toDataURL("image/png");

    // Add the image to the PDF
    pdf.addImage(canvasDataUrl, "PNG", x, y, canvasWidth, canvasHeight);

    // Save the PDF
    pdf.save("mannequin-customization.pdf");
  };

  return (
    <div className="mannequin">
      <p className="promptText2">
        Style your mannequin! <FontAwesomeIcon icon={faArrowTurnDown} />
      </p>
      <canvas
        id="myCanvas"
        ref={canvasRef}
        width={300}
        height={450}
        style={{ border: "2px solid" }}
      />
      <button className="exportButton" onClick={handleExport}>
        Export as PDF
      </button>
    </div>
  );
};

export default Mannequin;
