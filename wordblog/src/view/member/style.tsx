import styled from "styled-components/macro";


export const Wrap = styled.div`
  width: 100%;
  background-color: #F5F6F7;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Header = styled.div`
  margin: 0 auto;
  padding: 62px 0px 20px;

  color: #00C850;
  font-size: 3rem;
  font-weight: bold;
`;

export const Container = styled.div`
  margin: 0 auto 60px;
  max-width: 760px;
  min-width: 460px;
`;

export const Content = styled.div`
  width: 460px;
`;

export const BirthInputWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 220px;
  }
`;

export const HorizonWrapper = styled.span`
  & + & {
    margin-right: 2rem;
  }
`;