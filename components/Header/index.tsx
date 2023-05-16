import React from "react";
import * as S from "./style";
import Search from "assets/search.svg";

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderTitleText href="/">ubin.log</S.HeaderTitleText>
        <S.HeaderSearchContainer>
          <S.HeaderSearchInput type="text" />
          <S.HeaderSearchButton src={Search} alt="" />
        </S.HeaderSearchContainer>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
};

export default Header;
