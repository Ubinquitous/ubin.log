import SearchLayout from "@/layouts/SearchLayout";
import SearchPropsType from "@/types/search.props.type";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

const Search = ({ post }: SearchPropsType) => {
  return <SearchLayout post={post} />;
};

const getApiDocs = async (postname: string) => {
  try {
    return (await axios.get(`api/post/${postname}`)).data;
  } catch (err) {
    return false;
  }
};

export const getServerSideProps: GetServerSideProps<SearchPropsType> = async (context) => {
  const { params } = context;
  const post = await getApiDocs(params?.search as string);

  if (!post) return { notFound: true };

  return { props: { post } };
};

export default Search;
