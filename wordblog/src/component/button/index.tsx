import React from 'react';
import * as S from './style';

// Component
// Props
// State

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {

  // event Handler
  return <S.Button onClick={onClick}>{children}</S.Button>
}

export default Button;