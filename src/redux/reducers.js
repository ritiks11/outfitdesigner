import {
  SELECT_OUTFIT,
  SELECT_LEHENGA_OPTION,
  SET_CUSTOMIZATION,
  // SELECT_TYPE_OPTION,
  // SELECT_LENGTH_OPTION,
} from "./actions";

const initialState = {
  selectedOutfit: "",
  selectedLehengaOption: "",
  // selectedTypeOption: "",
  // selectedLengthOption: "",
  customization: {
    type: "",
    style: "",
    styleImage: "",
    color: "",
    embroidery: "",
    embroideryImage: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OUTFIT:
      return {
        ...state,
        selectedOutfit: action.payload,
        selectedLehengaOption: "",
        // selectedTypeOption: "",
        // selectedLengthOption: "",
        customization: {
          type: "",
          style: "",
          styleImage: "",
          color: "",
          embroidery: "",
          embroideryImage: "",
        },
      };
    case SELECT_LEHENGA_OPTION:
      return {
        ...state,
        selectedLehengaOption: action.payload,
        // selectedTypeOption: "",
        // selectedLengthOption: "",
      };
    // case SELECT_TYPE_OPTION:
    //   return {
    //     ...state,
    //     selectedTypeOption: action.payload,
    //     selectedLengthOption: "",
    //   };
    // case SELECT_LENGTH_OPTION:
    //   return {
    //     ...state,
    //     selectedLengthOption: action.payload,
    //     selectedTypeOption: "",
    //   };
    case SET_CUSTOMIZATION:
      return {
        ...state,
        customization: {
          ...state.customization,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
