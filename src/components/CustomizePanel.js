import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomization, setSelectedImage } from "../redux/actions";
import mockData from "../mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

const CustomizePanel = () => {
  const dispatch = useDispatch();
  const { selectedLehengaOption, customization } = useSelector(
    (state) => state
  );

  const [expandedMainOption, setExpandedMainOption] = useState("");
  const [expandedSubOption, setExpandedSubOption] = useState("");

  const handleMainOptionClick = (option) => {
    if (expandedMainOption === option) {
      setExpandedMainOption("");
      setExpandedSubOption("");
    } else {
      setExpandedMainOption(option);
      setExpandedSubOption("style");
    }
  };

  const handleSubOptionClick = (option) => {
    setExpandedSubOption(option);
  };

  const handleCustomizationClick = (type, value, image = "") => {
    const payload =
      selectedLehengaOption === "Lehenga"
        ? { [type]: value, [`${type}Image`]: image }
        : selectedLehengaOption === "Dupatta"
        ? {
            [`dupatta${type.charAt(0).toUpperCase() + type.slice(1)}`]: value,
            [`dupatta${type.charAt(0).toUpperCase() + type.slice(1)}Image`]:
              image,
          }
        : {
            [`blouse${type.charAt(0).toUpperCase() + type.slice(1)}`]: value,
            [`blouse${type.charAt(0).toUpperCase() + type.slice(1)}Image`]:
              image,
          };
    dispatch(setCustomization(payload));
    dispatch(setSelectedImage(image));
  };

  return (
    <div className="customize-panel">
      <div className="outfitPrompt">
        <p className="promptText1">
          Customize section is here! <FontAwesomeIcon icon={faArrowTurnDown} />
        </p>
      </div>
      {selectedLehengaOption === "Lehenga" && (
        <div className="customization-options">
          <button
            className="customOptions"
            onClick={() => handleMainOptionClick("type")}
          >
            Type
          </button>
        </div>
      )}
      {selectedLehengaOption === "Dupatta" && (
        <div className="customization-options">
          <button
            className="customOptions"
            onClick={() => handleMainOptionClick("type")}
          >
            Type
          </button>
        </div>
      )}
      {selectedLehengaOption === "Blouse" && (
        <div className="customization-options">
          <button
            className="customOptions"
            onClick={() => handleMainOptionClick("type")}
          >
            Type
          </button>
        </div>
      )}
      {(expandedMainOption === "type" || expandedMainOption === "length") && (
        <div className="customization-sub-options">
          <div className="sub-options">
            {["style", "color", "embroidery"].map((subOption) => (
              <button
                key={subOption}
                onClick={() => handleSubOptionClick(subOption)}
                className={`sub-option-button ${
                  expandedSubOption === subOption ? "active" : ""
                }`}
              >
                {subOption.charAt(0).toUpperCase() + subOption.slice(1)}
              </button>
            ))}
          </div>
          {selectedLehengaOption && expandedSubOption === "style" && (
            <div className="customization-details">
              <p className="detailText">
                Choose your Style <FontAwesomeIcon icon={faArrowTurnDown} />
              </p>
              {mockData[
                selectedLehengaOption === "Lehenga"
                  ? "customizationOptions"
                  : selectedLehengaOption === "Dupatta"
                  ? "customizationDupattaOptions"
                  : "customizationBlouseOptions"
              ].style.map((option, index) => (
                <img
                  key={index}
                  src={option.image}
                  alt={option.name}
                  onClick={() =>
                    handleCustomizationClick("style", option.name, option.image)
                  }
                />
              ))}
            </div>
          )}
          {expandedSubOption === "color" && (
            <div className="customization-details">
              <p className="detailText">
                Choose your Color! <FontAwesomeIcon icon={faArrowTurnDown} />
              </p>
              <input
                type="color"
                onChange={(e) =>
                  handleCustomizationClick("color", e.target.value)
                }
                className="colorbox"
              />
            </div>
          )}
          {selectedLehengaOption && expandedSubOption === "embroidery" && (
            <div className="customization-details">
              <p className="detailText">
                Select your Embroidery{" "}
                <FontAwesomeIcon icon={faArrowTurnDown} />
              </p>
              {mockData[
                selectedLehengaOption === "Lehenga"
                  ? "customizationOptions"
                  : selectedLehengaOption === "Dupatta"
                  ? "customizationDupattaOptions"
                  : "customizationBlouseOptions"
              ].embroidery.map((option, index) => (
                <img
                  key={index}
                  src={option.image}
                  alt={option.name}
                  onClick={() =>
                    handleCustomizationClick(
                      "embroidery",
                      option.name,
                      option.image
                    )
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomizePanel;
