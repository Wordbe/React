import React, { useEffect, useState } from "react";
import * as S from "./style";

const Header: React.FC = () => {
  // const [user, setUser] = useState("");
  const [count, setCount] = useState(1);
  const [point, setPoint] = useState(1);

  useEffect(() => {
    setPoint(count * 2);
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <S.Header>
      <S.SearchBar></S.SearchBar>
      <S.Message>
        {count} {point} <button onClick={onClick}>count up</button>
      </S.Message>
    </S.Header>
  );
};

export default Header;