import React from 'react';
import Wrapper from './Wrapper';
import Button from '../component/button/index';

type MainProps = {
  name: String
}

function Main({ name }: MainProps) {

  return (
    <Wrapper>
      <h1>Wordbe-zon, welcome {name}</h1>
    </Wrapper>
  )
}

Main.defaultProps = {
  name: "JIN"
}

export default Main;