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
    plans: {
      id: '1',
      name: 'Arcade',
      monthlyValue: 12,
      yearlyValue: 90,
    },
    yearlyOrMonthly: false,
    addOns: [],
    fieldErrors: {},
  });
  return (
    <FormContextProvider value={{ formState, setFormState }}>
      {children}
    </FormContextProvider>
  );
};
