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
  justify-content: space-between;
  align-items: center;
`;
