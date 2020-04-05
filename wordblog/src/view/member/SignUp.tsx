import React from 'react';
import * as S from './style';
import Input from '../../component/input';
import Button from '../../component/button';

function SignUp() {
  return (
    <S.Wrap>
      <S.Header>회원가입</S.Header>
      <S.Container>
        <S.Content>
          <h3>아이디</h3>
          <Input name="ID"></Input>
          <h3>비밀번호</h3>
          <Input name="password"></Input>
          <h3>비밀번호 재확인</h3>
          <Input name="password"></Input>
          <h3>이름</h3>
          <Input name="name"></Input>
          <h3>생년월일</h3>
          <S.BirthInputWrapper>
            <Input name="birthYY"></Input>
            <Input name="birthMM"></Input>
            <Input name="birthDD"></Input>
          </S.BirthInputWrapper>
          <h3>성별</h3>
          <Input name="gender"></Input>
          <h3>이메일</h3>
          <Input name="email"></Input>
          <h3>휴대전화</h3>
          <Input name="phone"></Input>
          <h3>관심사</h3>
          <Input name="interest"></Input>
          <h5> <u>약관에 동의합니다.</u> <input name="termsAgree" type="checkbox" /> </h5>
          <S.ButtonWrapper>
            <Button>초기화</Button><Button>가입하기</Button>
          </S.ButtonWrapper>
        </S.Content>
      </S.Container>
    </S.Wrap>
  );
}

export default SignUp;