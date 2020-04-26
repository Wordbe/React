import styled from "styled-components/macro";
import { StyledLink } from "../link/style";

/*  flex: flex-grow flex-shrink flex-basis
 *  flex: none = 0 0 auto;
 */

export const NavLeft = styled.div`
  margin-right: auto;
  width: auto;
  height: 60px;

  display: flex;
`;

export const NavFill = styled.div`
  margin: 0 auto;
  width: auto;
  height: 60px;
`;

export const NavRight = styled.div`
  margin-left: auto;
  width: auto;
  height: 60px;
`;

/* 
 ************************************** NavBelt **************************************
 */

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

export const NavLogoDiv = styled.div`
  flex: none;
  margin: 0;
  padding: 10px 0;

  width: 161px;
  height: 50px;
  cursor: pointer;
`;

export const NavLogoLink = styled(StyledLink)``;

export const NavLogo = styled.img`
  margin-top: 5px;
  width: 103px;
  height: 40px;
  cursor: pointer;
`;

export const NavSearchFill = styled(NavFill)`
  margin: 0;
  width: 100%;
`;

export const NavSearchRight = styled(NavRight)`
  margin: 0;
`;

export const NavSearch = styled.div`
  width: 1000px;
  height: 60px;
  padding: 10px 4px;
`;

export const NavSearchBar = styled.form`
  height: 40px;
  display: flex;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 4px 10px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  color: #111;
  font-size: 15px;
  line-height: 15px;
  text-indent: 8px;
  box-shadow: none;
  outline: 0;
`;

export const SearchSubmitLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #111;
  cursor: pointer;
`;

export const SearchSubmit = styled.div`
  display: flex;
  justify-content: center;

  background-color: #febd69;
  border: none;
  width: 45px;
  height: 40px;
  border-radius: 0 4px 4px 0;
`;

export const NavTools = styled.div`
  margin-top: 2px;
  margin-right: 30px;
  padding: 3px 0 0 0;
  display: flex;
`;

export const NavSignUpLink = styled(StyledLink)`
  padding: 10px 0;
  color: white;
  font-size: 14px;
  cursor: pointer;
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



/* 
 ************************************** NavMain **************************************
 */
export const NavList = styled.div`
  margin-left: 140px;
  padding-left: 2px;
  width: 1160px;
  height: 40px;
`;

export const NavListLink = styled(StyledLink)`
  margin: 1px 2px 12px 1px;
  padding: 7px 8px 7px 8px;
  color: #ccc;
  font-size: 13px;
  font-weight: bold;
`;