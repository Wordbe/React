import React, { useState } from 'react';
import Body from './Body';
import Wrapper from './Wrapper';
import Button from '../component/button/index';

type MainProps = {
  name: String
}

function Main({ name }: MainProps) {
  const buttonHandler = () => {
    alert("아아아아");
  };
  const [message, setMessage] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  return (
    <Wrapper>
      <h1>Wordtory, welcome {name}</h1>
      <Body />
      <Button onClick={buttonHandler}>
        {message}
      </Button>
      <input onChange={handleInput}></input>
    </Wrapper>
  )
}

Main.defaultProps = {
  name: "JIN"
}

export default Main;