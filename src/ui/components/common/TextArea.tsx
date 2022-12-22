import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  id?: string;
  name?: string;
  rows?: number;
  placeholder?: string;
  onChange?: (e: any) => void;
  [k: string]: any;
}

const TextArea = ({
  id,
  name,
  rows,
  placeholder,
  onChange,
  ...props
}: TextAreaProps) => (
  <Textarea
      id={id}
      name={name}
      rows={5}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
  />
);

export default TextArea;

const Textarea = styled.textarea`
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 16px 16px 0 16px;
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 90px;
    border-radius: 2px;
  }

  &:hover {
    border: 1px solid #828282;
  }

  &:focus {
    border: 1px solid #333333;
    color: #4F4F4F;
  }

  &:read-only {
    background-color: #F9F9F9;
    color: #4F4F4F;
  }

  &:disabled {
    background-color: #F9F9F9;
    color: #BDBDBD;
  }
`;
