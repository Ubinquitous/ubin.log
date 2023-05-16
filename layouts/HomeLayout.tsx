import React from "react";
import * as S from "./HomeLayout.style";
import HomePropsType from "@/types/home.props.type";
import Post from "@/components/Post";

const HomeLayout = ({ categories, posts }: HomePropsType) => {
  const [currentCategory, setCurrentCategory] = React.useState("All");

  const onChangeCurrentCategory = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <S.HomeLayout>
      <S.HomeBackgroundMain>
        <S.HomeBackgroundTitle>Welcome to ubin.log</S.HomeBackgroundTitle>
        <S.HomeBackgroundDescription>
          꾸준히 기록하며 배울 수 있다는 것에 감사함을 느끼는 사람, 박우빈입니다.
          <br />
          변하지 않고 계속 학구열을 불태워 꼭 정해둔 목표를 이루겠습니다.
        </S.HomeBackgroundDescription>
      </S.HomeBackgroundMain>
      <S.HomeContainer>
        <S.HomeContainerCategoryBox>
          {categories.map((category) => (
            <S.HomeContainerCategory
              key={category}
              onClick={() => onChangeCurrentCategory(category)}
              current={category === currentCategory ? "true" : "false"}
            >
              {category}
            </S.HomeContainerCategory>
          ))}
        </S.HomeContainerCategoryBox>
        <S.HomeContainerPostContainer>
          {posts.map((post) => {
            if (currentCategory === "All" || post.category?.includes(currentCategory))
              return <Post key={post.name} {...post} />;
          })}
        </S.HomeContainerPostContainer>
      </S.HomeContainer>
    </S.HomeLayout>
  );
};

export default HomeLayout;
