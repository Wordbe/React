import React from 'react';
import qs from 'qs';
import * as S from './style';

function SearchResult({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  console.log(query);
  const searchWords = query.k;
  return (
    <>
      <S.SearchResultToobar>
        <S.SearchResultToobarLeft>
          <h4><span>{searchWords}</span> 에 대한 검색 결과: </h4>
        </S.SearchResultToobarLeft>
        <S.SearchResultToobarRight></S.SearchResultToobarRight>
      </S.SearchResultToobar>
      <S.SearchResultContent>SearchResultContent</S.SearchResultContent>
    </>
  );
}

export default SearchResult;