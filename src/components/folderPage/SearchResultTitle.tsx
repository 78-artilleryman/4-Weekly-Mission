import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const SearchResult = styled.strong`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 600;
  color: var(--Linkbrary-gray100, #373740);

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Text = styled.h2`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 600;
  color: var(--Linkbrary-gray60, #9fa6b2);

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

function SearchResultTitle() {
  const router = useRouter();
  const { search } = router.query;

  if (search) {
    return (
      <Text>
        <SearchResult>{search}</SearchResult>으로 검색한 결과입니다.
      </Text>
    );
  } else {
    return null;
  }
}

export default SearchResultTitle;
