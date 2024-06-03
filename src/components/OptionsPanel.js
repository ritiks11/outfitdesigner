import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOutfit, selectLehengaOption } from "../redux/actions";
import mockData from "../mockData";

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
      <button className="outfitButton" onClick={() => handleOutfitClick("")}>
        {selectedOutfit || "Select an Outfit"}
      </button>
      {outfitOptions && (
        <div className="outfit-options">
          {mockData.outfits.map((outfit, index) => (
            <button
              className="clothesOptions"
              key={index}
              onClick={() => handleOutfitClick(outfit)}
            >
              {outfit}
            </button>
          ))}
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
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionsPanel;
