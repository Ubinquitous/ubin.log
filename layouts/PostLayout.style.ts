import Image from "next/image";
import { styled } from "styled-components";

export const PostLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PostContainer = styled.div`
  margin-top: 18vh;
  width: 56vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const PostTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostTitleContainerText = styled.span`
  font-size: 42px;
  font-weight: 700;
`;

export const PostTitleContainerAuthorAndDateBox = styled.div`
  margin-top: 4vh;
  display: flex;
`;

export const PostTitleContainerAuthor = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export const PostTitleContainerDate = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;

export const PostTitleContainerCategoryBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const PostTitleContainerCategory = styled.div`
  padding: 4px 16px 4px 16px;
  background-color: #f8f9fa;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 500;
  color: #00d8d8;
`;

export const PostTitleContainerImage = styled(Image)`
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
`;

export const PostTitleContainerContents = styled.div`
  line-height: 160%;
`;
