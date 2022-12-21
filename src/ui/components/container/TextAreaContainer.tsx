import React from 'react';

import TextArea from '../common/TextArea';
import useInput from '../../hooks/useInput';

const TextAreaContainer = () => {
  const { input, onChange } = useInput('');

  return (
    <TextArea
      onChange={onChange}
      value={input}
    />
  );
};

export default TextAreaContainer;
