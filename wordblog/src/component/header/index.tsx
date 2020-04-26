import React, { useState } from "react";
import * as S from "./style";
import * as Nav from '../navigator/style';
import LogoImage from '../../images/logo-wordbe-white.png'
import { MdViewHeadline, MdSearch } from 'react-icons/md'

function Header() {
  const [navFill, setNavFill] = useState("");
  const onNavFillChange = (e) => {
    setNavFill(e.target.value);
  }

  const onFormSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const url = "/s?k=" + navFill;
      console.log(url);
      window.location.assign(url);
    }
  }

  return (
    <>
      <S.Header>
        <S.NavBar>
          <S.NavBelt>
            <Nav.NavLeft>
              <Nav.NavHamburgerMenu>
                <MdViewHeadline />
              </Nav.NavHamburgerMenu>
              <Nav.NavLogoDiv>
                <Nav.NavLogoLink to="/">
                  <Nav.NavLogo src={LogoImage}></Nav.NavLogo>
                </Nav.NavLogoLink>
              </Nav.NavLogoDiv>
            </Nav.NavLeft>
            <Nav.NavFill>
              <Nav.NavSearch>
                <Nav.NavSearchBar>
                  <Nav.NavSearchFill>
                    <label id="nav-search-label" form="searchbartextbox"></label>
                    <Nav.SearchBoxInput type="text" onChange={onNavFillChange} onKeyDown={onFormSubmit}></Nav.SearchBoxInput>
                  </Nav.NavSearchFill>
                  <Nav.NavSearchRight>
                    <Nav.SearchSubmit>
                      <Nav.SearchSubmitLink to={`/s?k=${navFill}`}>
                        <MdSearch />
                      </Nav.SearchSubmitLink>
                    </Nav.SearchSubmit>
                  </Nav.NavSearchRight>
                </Nav.NavSearchBar>
              </Nav.NavSearch>
            </Nav.NavFill>
            <Nav.NavRight>
              <Nav.NavTools>
                <Nav.NavSignIn>
                  <span>로그인</span>
                  <span>Account & Lists</span>
                </Nav.NavSignIn>
                <Nav.NavSignUpLink to="/sign-up">
                  <span>회원가입</span>
                </Nav.NavSignUpLink>
              </Nav.NavTools>
            </Nav.NavRight>
          </S.NavBelt>
          <S.NavMain>
            <Nav.NavLeft></Nav.NavLeft>
            <Nav.NavFill>
              <Nav.NavList>
                <Nav.NavListLink to="/today-deal">Today's Deal</Nav.NavListLink>
                <Nav.NavListLink to="/customer-service">Customer Service</Nav.NavListLink>
                <Nav.NavListLink to="/registry">Registry</Nav.NavListLink>
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