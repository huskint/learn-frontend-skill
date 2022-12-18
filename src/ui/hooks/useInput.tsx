import { useState } from 'react';

type useInputsType = (initialState?: string) => {
  inputs: string;
  onChange: (e: any) => void;
  reset: () => void;
}
const useInput = (initialState = '') => {
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
