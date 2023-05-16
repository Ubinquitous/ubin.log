import React from "react";
import * as S from "./style";

const navigationLink = [
  { name: "Github", src: "https://github.com/ubinquitous" },
  { name: "Instagram", src: "https://instagram.com/ubin._ing" },
  { name: "Velog", src: "https://velog.io/@ubinquitous" },
  { name: "Introduce", src: "https://ubinquitous.github.io" },
];

const Footer = () => {
  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.FooterHeadContainer>
          <S.FooterHeadTitleText>ubin.log</S.FooterHeadTitleText>
          <S.FooterHeadNavigationContainer>
            {navigationLink.map(({ name, src }) => (
              <S.FooterHeadNavigation key={name} href={src} target="_blank">
                {name}
              </S.FooterHeadNavigation>
            ))}
          </S.FooterHeadNavigationContainer>
        </S.FooterHeadContainer>
        <S.FooterSubTitleText>배우는게 즐거운 사람의 개발일지</S.FooterSubTitleText>
        <S.FooterMiddleGmailText>@ubin._ing | Ubinquitous1@gmail.com</S.FooterMiddleGmailText>
        <S.FooterLowDescriptionText>
          부산소프트웨어마이스터고등학교 | 박우빈 | 부산광역시 강서구 가락대로 1393
          <br />
          개인정보책임관리자 : 박우빈 | 연락처 : @ubin._ing, Ubinquitous1@gmail.com
          <br />
          개인 문의 : @ubin._ing | 비즈니스 문의 : Ubinquitous1@gmail.com
          <br />
          <div>&copy;2023 ubin.log All rights reserved.</div>
        </S.FooterLowDescriptionText>
      </S.FooterContainer>
    </S.FooterLayout>
  );
};

export default Footer;
