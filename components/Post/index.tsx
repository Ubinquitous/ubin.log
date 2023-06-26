import React from "react";
import * as S from "./style";
import PostType from "@/types/post.type";
import { useRouter } from "next/router";
import dateParser from "@/utils/dateParser";

const Post = (post: PostType) => {
  const router = useRouter();

  const onNavigateDetailPage = (postname: string) => {
    router.push(`/post/${postname}`);
  };

  return (
    <S.PostCard onClick={() => onNavigateDetailPage(post.title)}>
      <S.PostCardImage src={post.thumbnail} alt="" width={1000} height={1000} />
      <S.PostCategoryBox>
        {post.tags?.map((tag) => (
          <S.PostCategory key={tag}>{tag}</S.PostCategory>
        ))}
      </S.PostCategoryBox>
      <S.PostCardTitle>{post.title}</S.PostCardTitle>
      <S.PostCardDate>{dateParser(post.released_at)}</S.PostCardDate>
      <S.PostCardSubtitle>{post.short_description}</S.PostCardSubtitle>
    </S.PostCard>
  );
};

export default Post;
