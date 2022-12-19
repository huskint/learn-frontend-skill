import React from 'react';

import TextField from '../common/TextField';

const InputContainer = () => {
  console.log('input Container');
  return (
    <>
      <TextField
        label="label1"
        id="label1"
        placeholder="placeholder"
        onChange={() => {
        }}
        value=""
      />
      <TextField
        label="label2"
        id="label2"
        name="label2"
        placeholder="placeholder"
        readOnly
        onChange={() => {
        }}
        value=""
      />
      <TextField
        label="label3"
        id="label3"
        name="label3"
        placeholder="placeholder"
        disabled
        onChange={() => {
        }}
        value=""
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
