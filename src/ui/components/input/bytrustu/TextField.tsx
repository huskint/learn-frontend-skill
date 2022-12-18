import React from 'react';
import styled, { css } from 'styled-components';

interface TextFieldProps {
  id?: string,
  name?: string,
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;
  [k: string]: any;
}

const TextField = ({
  id,
  name,
  label,
  value,
  onChange,
  disabled,
  readOnly,
  error,
  errorMessage,
  ...props
}: TextFieldProps) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Placeholder"
      disabled={disabled}
      error={error}
      {...props}
    />
    <ErrorMessage>
      {
        error && (errorMessage || '')
      }
    </ErrorMessage>
  </Container>
);
export default TextField;

const Container = styled.div`
  width: 500px;
  height: auto;
  
  label + input {
    margin-top: 10px;
  }
  
  input + div {
    margin-top: 8px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input<TextFieldProps>`
  width: 100%;
  height: 48px;
  font-size: 14px;
  border: 1px solid #E0E0E0;
  color: #4F4F4F;
  padding: 0 16px;
  border-radius: 4px;
  
  ${({ error }) => error && css`
    border: 1px solid #EB5757 !important;
    color: #EB5757 !important;
  `}
  
  &::placeholder {
    color: #BDBDBD;
  }
  &:hover {
    border: 1px solid #828282;
  }
  &:focus {
    border: 1px solid #333333;
    outline: none;
  }
  &:read-only {
    background-color: #F9F9F9;
  }
  &:disabled {
    background-color: #F9F9F9;
    color: #BDBDBD;
  }
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #EB5757 !important;
`;
