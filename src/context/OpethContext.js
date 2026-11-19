import { createContext, useContext } from 'react';

export const OpethContext = createContext(null);

export function useOpeth() {
  const context = useContext(OpethContext);
  if (!context) {
    throw new Error('useOpeth() must be used within an OpethProvider.');
  }

  return context;
}
