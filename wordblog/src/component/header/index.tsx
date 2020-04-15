import React from "react";
import * as S from "./style";
import BannerImg from '../../images/store.png';

function Header() {

  return (
    <>
      <S.Header>Header
        <S.NavBelt>Belt</S.NavBelt>
        <S.NavMain>Main</S.NavMain>
      </S.Header>
      <S.pageContent>PageContent
        <S.DesktopBanner>DesktopBanner
          <S.BannerImage src={BannerImg}></S.BannerImage>
        </S.DesktopBanner>
        <S.GwLayout>GwLayout</S.GwLayout>
      </S.pageContent>
    </>
  );
};

export default Header;