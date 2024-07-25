export const SELECT_OUTFIT = "SELECT_OUTFIT";
export const SELECT_LEHENGA_OPTION = "SELECT_LEHENGA_OPTION";
export const SET_CUSTOMIZATION = "SET_CUSTOMIZATION";
export const SET_SELECTED_IMAGE = "SET_SELECTED_IMAGE";

// export const SELECT_TYPE_OPTION = "SELECT_TYPE_OPTION";
// export const SELECT_LENGTH_OPTION = "SELECT_LENGTH_OPTION";

export const selectOutfit = (outfit) => ({
  type: SELECT_OUTFIT,
  payload: outfit,
});

export const selectLehengaOption = (option) => ({
  type: SELECT_LEHENGA_OPTION,
  payload: option,
});

export const setCustomization = (customization) => ({
  type: SET_CUSTOMIZATION,
  payload: customization,
});

export const setSelectedImage = (image) => ({
  type: SET_SELECTED_IMAGE,
  image,
});

// export const selectTypeOption = (option) => ({
//   type: SELECT_TYPE_OPTION,
//   payload: option,
// });

// export const selectLengthOption = (option) => ({
//   type: SELECT_LENGTH_OPTION,
//   payload: option,
// });
