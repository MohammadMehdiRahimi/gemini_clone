import run from "../../config/geimini";
const fetchRequest = (input) => {
  return {
    type: "FETCH_REQ",
    inputValue: input,
  };
};
const fetchSuccess = (text, input) => {
  return {
    type: "FETCH_SUCCESS",
    payload: text,
 
  };
};

const fetchFailure = (error) => {
  return { type: "FETCH_FAILURE", payload: error };
};
const fetchData = (inputs) => {
  return async (dispatch) => {
    dispatch(fetchRequest(inputs));
    try {
      const response = await run(inputs);
      dispatch(fetchSuccess(response.text(), inputs));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};

export default fetchData;
