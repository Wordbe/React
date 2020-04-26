import styled from 'styled-components';

export const SearchResultToobar = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0 10px #ddd;
  background-color: #fff;

  display: flex;
  height: 40px;
`;

export const SearchResultToobarLeft = styled.div`
  margin-left: 100px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #c45500;
  }
`;
export const SearchResultToobarRight = styled.div`
  margin-left: auto;
`;

export const SearchResultContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100px;
  margin: 0 0 0 12px;
  padding: 0;
`;