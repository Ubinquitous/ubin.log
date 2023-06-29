import { styled } from "styled-components";

export const HomeLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
`;

export const HomeBackgroundMain = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #f2fdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const HomeBackgroundTitle = styled.div`
  font-size: 38px;
  font-weight: 800;
`;

export const HomeBackgroundDescription = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: gray;
  line-height: 150%;
`;

export const HomeContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  margin-bottom: 30px;
`;

export const HomeContainerCategoryBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 0 10px 6px;
  gap: 30px;
  line-height: 50%;
  border-bottom: 3px solid #f2f3f7;
`;

export const HomeContainerCategory = styled.div<{ current: string }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ current }) => (current === "true" ? "black" : "gray")};
  cursor: pointer;
`;

export const HomeContainerPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const HomeContainerCommentContainer = styled.div`
  width: 100%;
  border-top: 1.5px solid #ccc;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HomeContainerCommentTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const HomeContainerCommentBox = styled.div`
  width: 100%;
  height: 68px;
  background-color: white;
  border-bottom: 1.5px solid #f2f3f7;
  display: flex;
  align-items: center;
  padding-left: 26px;
  gap: 34px;
`;

export const HomeContainerCommentTextArea = styled.textarea`
  width: 100%;
  height: 130px;
  background-color: white;
  border: none;
  border-bottom: 1.5px solid #f2f3f7;
  display: flex;
  align-items: center;
  padding: 16px 0 0 18px;
  gap: 34px;
  resize: none;
  outline: none;
`;

export const HomeContainerCommentButton = styled.button`
  width: 70px;
  height: 28px;
  background-color: #00d8d8;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  margin-bottom: 5vh;
`;

export const HomeContainerCommentIndex = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const HomeContainerComment = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 16px;
  height: 70%;
  word-break: break-all;
`;
