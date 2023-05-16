import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.title}</h1>
    </div>
  );
};

export default Detail;
