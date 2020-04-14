import styled from "styled-components/macro";

// 16px = 1rem

export const Header = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;

  background-color: #232F3E;

`;

export const NavBar = styled.div`
  background-color: rgb(35, 47, 62);

  color: rgb(17, 17, 17);
  font-size: 0.75rem;
  margin: 0rem 0rem;
`;

export const NavBelt = styled.div`
  width: 100%;
  font-size: 14px;

  color: white;
`;

export const NavMain = styled.div`
  width: 100%;

  color: white;
`;

export const SearchBar = styled.input`
  width: 200px;
  height: 28px;

  background-color: #3F4448;
  border: 0;
  border-radius: 5px;
  padding: 0 10px;
  color: white;
`

export const Message = styled.div`
  color: white;
`;