import React from 'react';
import * as S from "./style";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <S.NavFooter> NavFooter
      <S.NavBackToTop onClick={scrollToTop}>
        <S.NavFooterBackToTop>Back to topo</S.NavFooterBackToTop>
      </S.NavBackToTop>
    </S.NavFooter>
  );
}

export default Footer;