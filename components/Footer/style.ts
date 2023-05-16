import Link from "next/link";
import { styled } from "styled-components";

export const FooterLayout = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #303441;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 70vw;
  height: 36vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterHeadContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterHeadTitleText = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: white;
`;

export const FooterHeadNavigationContainer = styled.div`
  display: flex;
  gap: 22px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const FooterHeadNavigation = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-decoration: none;
`;

export const FooterSubTitleText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

export const FooterMiddleGmailText = styled.div`
  margin-top: 6vh;
  height: 7vh;
  font-size: 14px;
  color: #a5a5a5;
  font-weight: 400;
  border-bottom: 1.4px solid #a5a5a5;
`;

export const FooterLowDescriptionText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #a5a5a5;
  line-height: 140%;

  div {
    margin-top: 10px;
  }
`;
