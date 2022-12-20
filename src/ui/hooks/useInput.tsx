import { useState } from 'react';

type useInputType = (initialState?: string) => {
  input: string;
  onChange: (e: any) => void;
  reset: () => void;
}

const useInput: useInputType = (initialState = '') => {
  const [input, setInput] = useState(initialState);

  const onChange = (e: any) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput('');
  };

  return {
    input,
    onChange,
    reset,
  };
};

export default useInput;
