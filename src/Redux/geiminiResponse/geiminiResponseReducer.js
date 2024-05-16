const initialState = {
  loading: false,
  currentResponse: "",
  error: "",
  history: [],
  inputValue: "",
  showResualt: false,
};
const geiminiResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return {
        ...state,
        loading: true,
        showResualt: true,
        inputValue: action.inputValue,
      };
    case "FETCH_SUCCESS":
      const newElement = [...state.history];
      newElement.push(action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        currentResponse: action.payload,
        history: newElement,
  
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
        currentResponse: "",
        loading: false,
      };
    default:
      return state;
  }
};

export default geiminiResponseReducer;
