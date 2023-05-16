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
    return (await axios.get(`api/${path}`)).data;
  } catch (err) {
    return false;
  }
};

export const getServerSideProps: GetServerSideProps<HomePropsType> = async () => {
  const categories = ["All", ...(await getApiDocs("category"))];
  const posts = await getApiDocs("post");

  if (!categories || !posts) return { notFound: true };

  return { props: { categories, posts } };
};

export default Home;
