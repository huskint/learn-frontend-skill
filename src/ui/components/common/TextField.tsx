import React from 'react';
import styled, { css } from 'styled-components';

interface TextFieldProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  disabled?: boolean;

  [k: string]: any;
}

const TextField = ({
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  readOnly,
  disabled,
  ...props
}: TextFieldProps) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      error={error}
    />
    {
      error && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )
    }
  </Container>
);

export default TextField;

const Container = styled.div`
  width: 500px;
  height: auto;
  padding: 20px 0 0 40px;
  display: flex;
  flex-direction: column;
  
  & + & {
    margin-top: 20px;
  }
`;

const Label = styled.label`
  width: 400px;
  height: 20px;
  border-radius: 4px;
`;

const Input = styled.input<TextFieldProps>`
  width: 400px;
  height: 48px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 14px;

  ${(props) => props.error
          && css`
            color: #EB5757 !important;
            border: 1px solid #EB5757 !important;
          `};

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
    color: #4F4F4F;
    border: 1px solid #E0E0E0;
  }

  &:disabled {
    color: #BDBDBD;
    border: 1px solid #E0E0E0;
  }
`;

const ErrorMessage = styled.div`
  color: #EB5757;
  font-size: 14px;
  margin-top: 8px;
`;
