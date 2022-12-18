import { useState } from 'react';

type useInputsType = <T>(initialState: T) => {
  inputs: T;
  onChange: (e: any) => void;
}

const useInputs: useInputsType = (initialState) => {
  const [inputs, setInputs] = useState(initialState);
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return {
    inputs,
    onChange,
  };
};

export default useInputs;
