import Image from "next/image";
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

export const HeaderSearchContainer = styled.form`
  width: 210px;
  height: 30px;
  border-bottom: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderSearchInput = styled.input`
  width: 180px;
  height: 100%;
  outline: none;
  background-color: transparent;
  border: none;
`;

export const HeaderSearchButton = styled(Image)`
  width: 16px;
  height: 16px;
`;
