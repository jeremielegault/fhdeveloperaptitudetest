import React from "react";

export const FormContext = React.createContext();

// This is what the object that contains all the user input looks like.
const initialState = {
  dropdown: "",
  search: "",
};

function reducer(state, action) {
  switch (action.type) {
    // This receives the information that the user has put in on the WHAT page. This will generate the results afterwards.
    case "receive-form-info": {
      return {
        ...state,
        dropdown: action.dropdown,
        search: action.search,
      };
    }

    default:
      throw new Error(`unrecognized action: ${action.type}`);
  }
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const receiveFormInfo = (data) => {
    dispatch({
      type: "receive-form-info",
      ...data,
    });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        receiveFormInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
