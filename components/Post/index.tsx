import React from "react";
import * as S from "./style";
import PostType from "@/types/post.type";
import { useRouter } from "next/router";
import dateParser from "@/utils/dateParser";

const Post = ({ image, category, name, contents, date }: PostType) => {
  const router = useRouter();

  const onNavigateDetailPage = (postname: string) => {
    router.push(`/post/${postname}`);
  };

  return (
    <S.PostCard onClick={() => onNavigateDetailPage(name)}>
      <S.PostCardImage src={image} alt="" width={1000} height={1000} />
      <S.PostCategoryBox>
        {category?.map((ct) => (
          <S.PostCategory key={ct}>{ct}</S.PostCategory>
        ))}
      </S.PostCategoryBox>
      <S.PostCardTitle>{name}</S.PostCardTitle>
      <S.PostCardDate>{dateParser(date)}</S.PostCardDate>
      <S.PostCardSubtitle>{contents.length > 40 ? `${contents.slice(0, 40)}...` : contents}</S.PostCardSubtitle>
    </S.PostCard>
  );
};

export default Post;
