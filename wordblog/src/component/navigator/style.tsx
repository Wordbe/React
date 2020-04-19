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