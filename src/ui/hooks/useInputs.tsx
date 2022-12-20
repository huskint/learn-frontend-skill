import { useState } from 'react';

type useInputsType = <T>(initialState: T) => {
  inputs: T;
  onChange: (e: any) => void;
  reset: () => void;
}

const useInputs: useInputsType = (initialState: any) => {
  // TODO: useInput Hook을 작성하라.
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e: any) => {
    // TODO: onChange 함수를 작성하라.
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const reset = () => {
    // TODO: reset 함수를 작성하라.
    setInputs('');
  };

  return {
    inputs,
    onChange,
    reset,
  };
};

export default useInputs;
