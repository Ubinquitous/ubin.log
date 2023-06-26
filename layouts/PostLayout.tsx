import React from "react";
import * as S from "./PostLayout.style";
import PostType from "@/types/post.type";
import dateParser from "@/utils/dateParser";
import { Viewer } from "@/components/Viewer";
import DetailPostType from "@/types/detail.post.type";

const PostLayout = (post: DetailPostType) => {
  return (
    <S.PostLayout>
      <S.PostContainer>
        <S.PostTitleContainer>
          <S.PostTitleContainerText>{post.title}</S.PostTitleContainerText>
          <S.PostTitleContainerAuthorAndDateBox>
            <S.PostTitleContainerAuthor>ubin._ing&nbsp;</S.PostTitleContainerAuthor>
            <S.PostTitleContainerDate>· {dateParser(post.released_at)}</S.PostTitleContainerDate>
          </S.PostTitleContainerAuthorAndDateBox>
          <S.PostTitleContainerCategoryBox>
            {post.tags?.map((tag) => (
              <S.PostTitleContainerCategory key={tag}>{tag}</S.PostTitleContainerCategory>
            ))}
          </S.PostTitleContainerCategoryBox>
          <S.PostTitleContainerImage src={post.thumbnail} alt="" width={1000} height={1000} />
          <S.PostTitleContainerContents>
            <Viewer source={post.body} />
          </S.PostTitleContainerContents>
        </S.PostTitleContainer>
      </S.PostContainer>
    </S.PostLayout>
  );
};

export default PostLayout;
