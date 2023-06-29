import React from "react";
import * as S from "./HomeLayout.style";
import HomePropsType from "@/types/home.props.type";
import Post from "@/components/Post";
import { child, getDatabase, onValue, push, ref, update } from "firebase/database";

const HomeLayout = ({ categories, posts }: HomePropsType) => {
  const [currentCategory, setCurrentCategory] = React.useState("All");
  const [contents, setContents] = React.useState("");
  const [comments, setComments] = React.useState([{ key: "", comments: "" }]);

  const onChangeCurrentCategory = (category: string) => {
    setCurrentCategory(category);
  };

  React.useEffect(() => {
    const db = getDatabase();
    const comments = ref(db, "comments/");
    onValue(comments, (snapshot) => {
      const data = snapshot.val();
      const cmts = Object.entries(data)
        .map((x) => x[1])
        .reverse();
      setComments(cmts as any);
      setContents("");
    });
  }, []);

  const onCreatePost = () => {
    const db = getDatabase();
    const newPostKey = push(child(ref(db), "comments")).key;
    const updates: { [key: string]: any } = {};

    updates["comments/" + newPostKey] = {
      key: newPostKey,
      comments: contents,
    };

    update(ref(db), updates);
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
          <S.HomeContainerCategory
            onClick={() => onChangeCurrentCategory("All")}
            current={currentCategory === "All" ? "true" : "false"}
          >
            All
          </S.HomeContainerCategory>
          {categories.data.userTags.tags.map((category) => (
            <S.HomeContainerCategory
              key={category.id}
              onClick={() => onChangeCurrentCategory(category.name)}
              current={currentCategory === category.name ? "true" : "false"}
            >
              {category.name}
            </S.HomeContainerCategory>
          ))}
        </S.HomeContainerCategoryBox>
        <S.HomeContainerPostContainer>
          {posts.data.posts.map((post) => {
            if (currentCategory === "All" || post.tags?.includes(currentCategory))
              return <Post key={post.id} {...post} />;
          })}
        </S.HomeContainerPostContainer>
        <S.HomeContainerCommentContainer>
          <S.HomeContainerCommentTitle>댓글 쓰기</S.HomeContainerCommentTitle>
          <S.HomeContainerCommentTextArea onChange={(e) => setContents(e.target.value)} value={contents} />
          <S.HomeContainerCommentButton onClick={onCreatePost}>등록</S.HomeContainerCommentButton>
          <S.HomeContainerCommentTitle>댓글 목록</S.HomeContainerCommentTitle>
          {comments.map((k, index) => {
            return (
              <S.HomeContainerCommentBox key={k.key}>
                <S.HomeContainerCommentIndex>{String(index + 1).padStart(2, "0")}</S.HomeContainerCommentIndex>
                <S.HomeContainerComment>{k.comments}</S.HomeContainerComment>
              </S.HomeContainerCommentBox>
            );
          })}
        </S.HomeContainerCommentContainer>
      </S.HomeContainer>
    </S.HomeLayout>
  );
};

export default HomeLayout;
