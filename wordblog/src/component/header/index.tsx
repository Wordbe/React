import React from "react";
import { Route } from 'react-router-dom';
import * as S from "./style";
import * as Nav from '../navigator/style';
import LogoImage from '../../images/logo-wordbe-white.png'
import { MdViewHeadline, MdSearch } from 'react-icons/md'

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
                  <Nav.NavLeft></Nav.NavLeft>
                  <Nav.NavFill>
                    <Nav.NavSearchField>
                      <label id="nav-search-label" form="searchbartextbox"></label>
                      <Nav.SearchBoxInput></Nav.SearchBoxInput>
                    </Nav.NavSearchField>
                  </Nav.NavFill>
                  <Nav.NavRight>
                    <Nav.SearchSubmit>
                      <span><MdSearch /></span>
                      <input type="submit" value="Go" />
                    </Nav.SearchSubmit>
                  </Nav.NavRight>
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
            <Nav.NavFill>
              <Nav.NavList>
                <Route path="/today-deal" exact={true}>Today's Deal</Route>
                <Route path="/customer-service" exact={true}>Customer Service</Route>
                <Route path="/registry" exact={true}>Registry</Route>
              </Nav.NavList>
            </Nav.NavFill>
            <Nav.NavRight></Nav.NavRight>
          </S.NavMain>
        </S.NavBar>
      </S.Header>
    </>
  );
};

export default Header;