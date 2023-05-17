import React from "react";
import * as S from "./SearchLayout.style";
import SearchPropsType from "@/types/search.props.type";
import Post from "@/components/Post";

const SearchLayout = ({ post }: SearchPropsType) => {
  return (
    <S.SearchLayout>
      <S.SearchContainer>
        <S.SearchContainerPostContainer>
          <Post {...post} />
        </S.SearchContainerPostContainer>
      </S.SearchContainer>
    </S.SearchLayout>
  );
};

export default SearchLayout;
