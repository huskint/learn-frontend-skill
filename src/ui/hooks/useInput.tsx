import { useState } from 'react';

type useInputType = (initialState?: string) => {
  input: string;
  onChange: (e: any) => void;
  reset: () => void;
}

const useInput: useInputType = (initialState = '') => {
  // TODO: useInput Hook을 작성하라.
  const [input, setInput] = useState(initialState);

  const onChange = (e: any) => {
    // TODO: onChange 함수를 작성하라.
    setInput(e.target.value);
  };

  const reset = () => {
    // TODO: reset 함수를 작성하라.
    setInput('');
  };

  return {
    input,
    onChange,
    reset,
  };
};

export default useInput;
