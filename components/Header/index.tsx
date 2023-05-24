import React from "react";
import * as S from "./style";
import Search from "assets/search.svg";
import { useRouter } from "next/router";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const onNavigateResultPage = (searchvalue: string) => {
    router.push(`/search//${searchvalue}`);
  };

  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderTitleText href="/">ubin.log</S.HeaderTitleText>
        <S.HeaderSearchContainer>
          <S.HeaderSearchInput
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
          <S.HeaderSearchButton onClick={() => onNavigateResultPage(search)} src={Search} alt="" />
        </S.HeaderSearchContainer>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
};

export default Header;
