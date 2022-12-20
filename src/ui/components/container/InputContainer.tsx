import React from 'react';

import TextField from '../common/TextField';
import useInput from '../../hooks/useInput';
import useInputs from '../../hooks/useInputs';

const InputContainer = () => {
  const {
    input,
    onChange: onChangeInput,
  } = useInput('');

  const {
    inputs,
    onChange: onChangeInputs,
  } = useInputs<{ label2: string; label3: string; }>({
    label2: '',
    label3: '',
  });

  // Todo: onchange
  console.log(input);
  console.log('input Container');
  return (
    <>
      <TextField
        label="label1"
        id="label1"
        placeholder="placeholder"
        onChange={onChangeInput}
        value={input}
      />
      <TextField
        label="label2"
        id="label2"
        name="label2"
        placeholder="placeholder"
        readOnly
        onChange={onChangeInputs}
        value={inputs.label2}
      />
      <TextField
        label="label3"
        id="label3"
        name="label3"
        placeholder="placeholder"
        disabled
        onChange={onChangeInputs}
        value={inputs.label3}
      />
      <TextField
        label="label4"
        id="label4"
        error
        errorMessage="오류가 발생했습니다."
      />
    </>
  );
};

export default InputContainer;
