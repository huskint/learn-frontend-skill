import React from 'react';

import TextArea from '../common/TextArea';
import useInput from '../../hooks/useInput';

const TextAreaContainer = () => {
  const { input, onChange } = useInput('');

  return (
    <TextArea
      id="textarea"
      name="textarea"
      placeholder="placeholder"
      rows={5}
      onChange={onChange}
      value={input}
    />
  );
};

export default TextAreaContainer;
