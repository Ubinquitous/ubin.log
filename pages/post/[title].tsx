import PostLayout from "@/layouts/PostLayout";
import DetailPropsType from "@/types/detail.props.type";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

const Detail = ({ post }: DetailPropsType) => {
  return <PostLayout {...post} />;
};

const getApiDocs = async (postname: string) => {
  try {
    return (
      await axios.post(`https://v2cdn.velog.io/graphql`, {
        operationName: "ReadPost",
        query:
          "query ReadPost($username: String, $url_slug: String) {\n  post(username: $username, url_slug: $url_slug) {\n    id\n    title\n    released_at\n    updated_at\n    tags\n    body\n    short_description\n    is_markdown\n    is_private\n    is_temp\n    thumbnail\n    comments_count\n    url_slug\n    likes\n    liked\n    user {\n      id\n      username\n      profile {\n        id\n        display_name\n        thumbnail\n        short_bio\n        profile_links\n        __typename\n      }\n      velog_config {\n        title\n        __typename\n      }\n      __typename\n    }\n    comments {\n      id\n      user {\n        id\n        username\n        profile {\n          id\n          thumbnail\n          __typename\n        }\n        __typename\n      }\n      text\n      replies_count\n      level\n      created_at\n      level\n      deleted\n      __typename\n    }\n    series {\n      id\n      name\n      url_slug\n      series_posts {\n        id\n        post {\n          id\n          title\n          url_slug\n          user {\n            id\n            username\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    linked_posts {\n      previous {\n        id\n        title\n        url_slug\n        user {\n          id\n          username\n          __typename\n        }\n        __typename\n      }\n      next {\n        id\n        title\n        url_slug\n        user {\n          id\n          username\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
        variables: {
          url_slug: postname.replace(/ /gi, "-"),
          username: "ubin_ing",
        },
      })
    ).data;
  } catch (err) {
    return false;
  }
};

export const getServerSideProps: GetServerSideProps<DetailPropsType> = async (context) => {
  const { params } = context;
  const post = await getApiDocs(params?.title as string);

  if (!post) return { notFound: true };

  return { props: { post: post.data.post } };
};

export default Detail;
