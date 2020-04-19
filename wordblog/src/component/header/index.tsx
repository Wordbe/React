import React from "react";
import * as S from "./style";
import * as Nav from '../navigator/style';
import LogoImage from '../../images/logo-wordbe-white.png'
import { MdViewHeadline } from 'react-icons/md'

function Header() {

  return (
    <>
      <S.Header>
        <S.NavBar>
          <S.NavBelt>
            <Nav.NavLeft>
              <Nav.NavHamburgerMenu>
                <MdViewHeadline />
              </Nav.NavHamburgerMenu>
              <Nav.NavLogo src={LogoImage}></Nav.NavLogo>
            </Nav.NavLeft>
            <Nav.NavFill>
              <Nav.NavSearch>
                <Nav.NavSearchBar>
                  <Nav.NavLeft>1</Nav.NavLeft>
                  <Nav.NavFill>2</Nav.NavFill>
                  <Nav.NavRight>3</Nav.NavRight>
                </Nav.NavSearchBar>
              </Nav.NavSearch>
            </Nav.NavFill>
            <Nav.NavRight>
              <Nav.NavSignIn>
                <span>로그인</span>
                <span>Account & Lists</span>
              </Nav.NavSignIn>
            </Nav.NavRight>
          </S.NavBelt>
          <S.NavMain>
            <Nav.NavLeft></Nav.NavLeft>
            <Nav.NavFill></Nav.NavFill>
            <Nav.NavRight></Nav.NavRight>
          </S.NavMain>
        </S.NavBar>
      </S.Header>
    </>
  );
};

export default Header;