import React from 'react';
import * as S from "./style";
import BannerImg from '../images/world-network.jpg';

type MainProps = {
  name: String
}

function Main({ name }: MainProps) {
  return (
    <>
      <S.pageContent>
        <S.DesktopBanner>
          <S.BannerImage src={BannerImg}></S.BannerImage>
        </S.DesktopBanner>
        <S.GwLayout></S.GwLayout>
      </S.pageContent>
    </>
  )
}

Main.defaultProps = {
  name: "JIN"
}

export default Main;