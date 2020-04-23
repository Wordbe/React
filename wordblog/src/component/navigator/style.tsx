import styled from "styled-components/macro";

/*  flex: flex-grow flex-shrink flex-basis
 *  flex: none = 0 0 auto;
 */

export const NavLeft = styled.div`
  /* position: relative;
  float: left; */
  margin-right: auto;
  width: auto;
  height: 60px;

  display: flex;
`;

export const NavFill = styled.div`
  margin: 0 auto;
  width: auto;
  height: 60px;
  /* overflow: visible; */
`;

export const NavRight = styled.div`
  /* position: relative;
  float: right; */
  margin-left: auto;
  width: auto;
  height: 60px;
`;

export const NavHamburgerMenu = styled.div`
  flex: none;
  width: 40px;
  height: 50px;
  margin: 10px 7px;

  font-size: 40px;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #666;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const NavLogo = styled.img`
  flex: none;
  margin: 0;
  padding: 10px 0;

  width: 165px;
  height: 50px;
  cursor: pointer;
`;

export const NavSearch = styled.div`
  width: auto;
  height: 60px;
  padding: 10px 4px;
`;

export const NavSearchBar = styled.form`
  height: 40px;
  display: flex;

`;

export const NavSearchField = styled.div`
  height: 40px;
  top: 5px;
  border: none;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 4px 10px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  
  color: #111;
  font-size: 15px;
  line-height: 15px;
  text-indent: 8px;
  box-shadow: none;
  outline: 0;
`;

export const SearchSubmit = styled.div`
  display: flex;
  justify-content: center;

  background-color: #febd69;
  border: none;
  width: 45px;
  height: 40px;
  border-radius: 0 4px 4px 0;

  span {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #111;
    cursor: pointer;
  }
`;

export const NavSignIn = styled.div`
  width: 130px;
  height: 50px;
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  span {
    line-height: 20px;
  }
`;

export const NavList = styled.div`
  margin: 0;
  width: 1160px;
  height: 40px;
`;