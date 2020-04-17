import React from 'react';
import * as S from "./style";
import LogoImage from '../../images/logo-wordbe-white.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <S.NavFooter>
      <S.NavBackToTop onClick={scrollToTop}>
        <S.NavFooterBackToTop>
          <span>Back to top</span>
        </S.NavFooterBackToTop>
      </S.NavBackToTop>
      <S.NavFooterVerticalColumn>NavFooterVerticalColumn</S.NavFooterVerticalColumn>
      <S.NavFooterLine></S.NavFooterLine>
      <S.NavFooterPadItemLine>
        <S.NavFooterLogoLine>
          <S.Logo src={LogoImage}></S.Logo>
        </S.NavFooterLogoLine>
      </S.NavFooterPadItemLine>
      <S.NavFooterCopyright>
        <ul>
          <li>이용 약관</li>
          <li>Privacy Notice</li>
          <li>관심 기반 광고</li>
          <li>© 2020, wordbe.com, Inc. or its affiliates</li>
        </ul>
      </S.NavFooterCopyright>
    </S.NavFooter>
  );
}

export default Footer;