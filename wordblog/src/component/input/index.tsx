import React from 'react';
import * as S from './style';

type InputProps = {
  type: string;
  name: string;
  maxLength: number;
};

function Input({ type, name, maxLength }: InputProps) {
  return (
    <S.InputBox>
      <S.Input type={type} name={name} maxLength={maxLength}></S.Input>
    </S.InputBox>
  );
}

Input.defaultProps = {
  type: "text",
  maxLength: 20
};

export default Input;