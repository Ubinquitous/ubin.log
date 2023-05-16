import React from "react";
import * as S from "./PostLayout.style";
import PostType from "@/types/post.type";
import dateParser from "@/utils/dateParser";
import { Viewer } from "@/components/Viewer";

const PostLayout = ({ name, image, contents, category, date }: PostType) => {
  return (
    <S.PostLayout>
      <S.PostContainer>
        <S.PostTitleContainer>
          <S.PostTitleContainerText>{name}</S.PostTitleContainerText>
          <S.PostTitleContainerAuthorAndDateBox>
            <S.PostTitleContainerAuthor>Ubinquitous&nbsp;</S.PostTitleContainerAuthor>
            <S.PostTitleContainerDate>· {dateParser(date)}</S.PostTitleContainerDate>
          </S.PostTitleContainerAuthorAndDateBox>
          <S.PostTitleContainerCategoryBox>
            {category?.map((ct) => (
              <S.PostTitleContainerCategory key={ct}>{ct}</S.PostTitleContainerCategory>
            ))}
          </S.PostTitleContainerCategoryBox>
          <S.PostTitleContainerImage src={image} alt="" width={1000} height={1000} />
          <S.PostTitleContainerContents>
            <Viewer source={contents} />
          </S.PostTitleContainerContents>
        </S.PostTitleContainer>
      </S.PostContainer>
    </S.PostLayout>
  );
};

export default PostLayout;
