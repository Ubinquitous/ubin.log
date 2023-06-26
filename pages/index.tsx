import HomeLayout from "@/layouts/HomeLayout";
import HomePropsType from "@/types/home.props.type";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

const Home = (props: HomePropsType) => {
  return <HomeLayout {...props} />;
};

const getApiDocs = async (path: string) => {
  try {
    return (
      await axios.post(`https://v2cdn.velog.io/graphql`, {
        operationName: path,
        query:
          path === "Posts"
            ? "query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $limit: Int) {\n  posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $limit) {\n    id\n    title\n    short_description\n    thumbnail\n    user {\n      id\n      username\n      profile {\n        id\n        thumbnail\n        __typename\n      }\n      __typename\n    }\n    url_slug\n    released_at\n    updated_at\n    comments_count\n    tags\n    is_private\n    likes\n    __typename\n  }\n}\n"
            : "query UserTags($username: String) {\n  userTags(username: $username) {\n    tags {\n      id\n      name\n      description\n      posts_count\n      thumbnail\n      __typename\n    }\n    posts_count\n    __typename\n  }\n}\n",
        variables: {
          tag: null,
          username: "ubin_ing",
        },
      })
    ).data;
  } catch (err) {
    return false;
  }
};

export const getServerSideProps: GetServerSideProps<HomePropsType> = async () => {
  const categories = await getApiDocs("UserTags");
  const posts = await getApiDocs("Posts");

  if (!categories || !posts) return { notFound: true };

  return { props: { categories, posts } };
};

export default Home;
