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
    return (await axios.get(`api/post/${postname}`)).data;
  } catch (err) {
    return false;
  }
};

export const getServerSideProps: GetServerSideProps<DetailPropsType> = async (context) => {
  const { params } = context;
  const post = await getApiDocs(params?.title as string);

  if (!post) return { notFound: true };

  return { props: { post } };
};

export default Detail;
