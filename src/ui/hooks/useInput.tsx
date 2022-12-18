import { useState } from 'react';

const useInput = (initialState = '') => {
  const [input, setInput] = useState(initialState);
  const onChange = (e: any) => {
    setInput(e.target.value);
  };
  return {
    input,
    onChange,
  };
};

export default useInput;
