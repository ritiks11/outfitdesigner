import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOutfit, selectLehengaOption } from "../redux/actions";
import mockData from "../mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

const OptionsPanel = () => {
  const [outfitOptions, setOutfitOptions] = useState(false);
  const dispatch = useDispatch();
  const selectedOutfit = useSelector((state) => state.selectedOutfit);

  const handleOutfitClick = (outfit) => {
    setOutfitOptions(!outfitOptions);
    dispatch(selectOutfit(outfit));
  };

  const handleLehengaOptionClick = (option) => {
    dispatch(selectLehengaOption(option));
  };

  return (
    <div className="options-panel">
      <div className="outfitPrompt">
        <p className="promptText1">
          start by selecting an outfit!{" "}
          <FontAwesomeIcon icon={faArrowTurnDown} />
        </p>
      </div>
      <div className="selectOutfitBtnContainer">
        <button className="outfitButton" onClick={() => handleOutfitClick("")}>
          {selectedOutfit || "Select an Outfit"}
        </button>
      </div>

      {outfitOptions && (
        <div className="optionsContainer">
          <div className="outfit-options">
            {mockData.outfits.map((outfit, index) => (
              <button
                className="clothesOptions"
                key={index}
                onClick={() => handleOutfitClick(outfit)}
              >
                <FontAwesomeIcon icon={faArrowTurnUp} className="arrowIcons" />{" "}
                {outfit}
              </button>
            ))}
          </div>
        </div>
      )}
      {selectedOutfit === "Lehenga Set" && (
        <div className="lehenga-options">
          {mockData.lehengaOptions.map((option, index) => (
            <button
              className="lehengaOptions"
              key={index}
              onClick={() => handleLehengaOptionClick(option)}
            >
              <FontAwesomeIcon icon={faArrowTurnUp} className="arrowIcons" />{" "}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionsPanel;
