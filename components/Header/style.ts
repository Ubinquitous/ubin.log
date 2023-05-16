import Link from "next/link";
import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const HeaderContainer = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderTitleText = styled(Link)`
  font-size: 22px;
  font-weight: 700;
  color: black;
  margin-right: auto;
  text-decoration: none;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const HeaderNavText = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: none;
`;
