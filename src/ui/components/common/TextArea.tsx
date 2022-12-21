import React from 'react';
import styled from 'styled-components';

const TextArea = () => (
  <Container>
    <Textarea />
  </Container>
);

export default TextArea;

const Container = styled.div`

`;

const Textarea = styled.textarea`
  width: 400px;
  height: 119px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 16px;
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
}
`;
