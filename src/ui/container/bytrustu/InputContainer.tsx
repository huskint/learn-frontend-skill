import React, { useState } from 'react';

import TextField from '../../components/input/bytrustu/TextField';

const InputContainer = () => {
  const [input, setInput] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const [inputs, setInputs] = useState({
    label2: '',
    label3: '',
  });
  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  console.log(input, inputs);
  return (
    <div>
      <TextField
        label="label1"
        id="label1"
        onChange={onChangeInput}
        value={input}
      />
      <TextField
        label="label2"
        id="label2"
        name="label2"
        value={inputs.label2}
        onChange={onChangeInputs}
        // readOnly
      />
      <TextField
        label="label3"
        id="label3"
        name="label3"
        value={inputs.label3}
        onChange={onChangeInputs}
        // disabled
      />
      <TextField
        label="label4"
        id="label4"
        error
        errorMessage="오류가 발생했습니다."
      />
    </div>
  );
};

export default InputContainer;
