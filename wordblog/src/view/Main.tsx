import React from 'react';
import * as S from "./style";
import BannerImg from '../images/store.png';

type MainProps = {
  name: String
}

function Main({ name }: MainProps) {
  return (
    <>
      <S.pageContent>PageContent
        <S.DesktopBanner>DesktopBanner
          <S.BannerImage src={BannerImg}></S.BannerImage>
        </S.DesktopBanner>
        <S.GwLayout>GwLayout</S.GwLayout>
      </S.pageContent>
    </>
  )
}

Main.defaultProps = {
  name: "JIN"
}

export default Main;