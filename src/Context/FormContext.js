import { createContext, useContext, useState } from 'react';
export const FormContext = createContext();
export const FormContextProvider = FormContext.Provider;

export const FormStateProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    fields: {
      name: '',
      email: '',
      phone: '',
    },
    fieldErrors: {},
    plans: [],
    addOns: [],
  });
  return (
    <FormContextProvider value={{ formState, setFormState }}>
      {children}
    </FormContextProvider>
  );
};
