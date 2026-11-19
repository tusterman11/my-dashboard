import { useState } from 'react';
import { initialOpeth } from '../data/opeth.js';
import { OpethContext } from './OpethContext';

function OpethProvider({ children }) {
  const [opeth, setOpeth] = useState(initialOpeth);

  function addOpeth(newOpeth) {
    setOpeth((currentOpeth) => [...currentOpeth, newOpeth]);
  }

  const value = { opeth, addOpeth };

  return <OpethContext value={value}>{children}</OpethContext>;
}

export default OpethProvider;
