import React from "react";
import * as S from "./style";

const navigationLink = [
  { name: "Github", src: "https://github.com/ubinquitous" },
  { name: "Instagram", src: "https://instagram.com/ubin._ing" },
  { name: "Velog", src: "https://velog.io/@ubinquitous" },
  { name: "Introduce", src: "https://ubinquitous.github.io" },
];

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderTitleText href="/">ubin.log</S.HeaderTitleText>
        <S.HeaderNavContainer>
          {navigationLink.map(({ name, src }) => (
            <S.HeaderNavText key={name} href={src} target="_blank">
              {name}
            </S.HeaderNavText>
          ))}
        </S.HeaderNavContainer>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
};

export default Header;
