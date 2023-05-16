import Image from "next/image";
import { styled } from "styled-components";

export const PostCard = styled.div`
  width: 22vw;
  height: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;

export const PostCardImage = styled(Image)`
  width: 100%;
  height: 210px;
  border-radius: 6px;
`;

export const PostCategoryBox = styled.div`
  display: flex;
  gap: 6px;
`;

export const PostCategory = styled.div`
  padding: 3px 12px 3px 12px;
  background-color: #f8f9fa;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: #00d8d8;
`;

export const PostCardTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const PostCardSubtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
`;

export const PostCardDate = styled(PostCardSubtitle)`
  margin-top: -4px;
`;
