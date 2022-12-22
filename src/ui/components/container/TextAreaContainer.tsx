import React from 'react';

import Textarea from '../common/Textarea';
import useInput from '../../hooks/useInput';

const TextAreaContainer = () => {
  const { input, onChange } = useInput('');

  return (
    <Textarea
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
