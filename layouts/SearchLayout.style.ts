import { styled } from "styled-components";

export const SearchLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
`;

export const SearchContainer = styled.div`
  margin-top: 16vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 4vh;
  margin-bottom: 30px;
`;

export const SearchContainerCategoryBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 10px 6px;
  gap: 30px;
  border-bottom: 3px solid #f2f3f7;
`;

export const SearchContainerCategory = styled.span<{ current: string }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ current }) => (current === "true" ? "black" : "gray")};
  cursor: pointer;
`;

export const SearchContainerPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
