import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCustomization,
  selectTypeOption,
  selectLengthOption,
} from "../redux/actions";
import mockData from "../mockData";

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
    dispatch(setCustomization({ [type]: value, [`${type}Image`]: image }));
  };

  return (
    <div className="customize-panel">
      <h2 className="customizeTitle">Customize</h2>
      {selectedLehengaOption === "Lehenga" && (
        <div className="customization-options">
          <button
            className="customOptions"
            onClick={() => handleMainOptionClick("type")}
          >
            Type
          </button>
          <button
            className="customOptions"
            onClick={() => handleMainOptionClick("length")}
          >
            Length
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
          <button
            className="customOptions"
            onClick={() => handleMainOptionClick("length")}
          >
            Length
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
                className={expandedSubOption === subOption ? "active" : ""}
              >
                {subOption.charAt(0).toUpperCase() + subOption.slice(1)}
              </button>
            ))}
          </div>
          {expandedSubOption === "style" && (
            <div className="customization-details">
              <h3>Style</h3>
              {mockData.customizationOptions.style.map((option, index) => (
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
          {selectedLehengaOption === "Dupatta" &&
            expandedSubOption === "style" && (
              <div className="customization-details">
                <h3>Style</h3>
                {mockData.customizationDupattaOptions.style.map(
                  (option, index) => (
                    <img
                      key={index}
                      src={option.image}
                      alt={option.name}
                      onClick={() =>
                        handleCustomizationClick(
                          "style",
                          option.name,
                          option.image
                        )
                      }
                    />
                  )
                )}
              </div>
            )}
          {expandedSubOption === "color" && (
            <div className="customization-details">
              <h3>Color</h3>
              <input
                type="color"
                onChange={(e) =>
                  handleCustomizationClick("color", e.target.value)
                }
              />
            </div>
          )}
          {expandedSubOption === "embroidery" && (
            <div className="customization-details">
              <h3>Embroidery</h3>
              {mockData.customizationOptions.embroidery.map((option, index) => (
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
