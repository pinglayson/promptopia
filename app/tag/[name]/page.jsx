"use client";

import { useEffect, useState } from "react";
import { PrompCardList } from "@components/Feed";

const page = ({ params }) => {
  const [prompts, setPrompts] = useState([]);

  console.log(params);

  useEffect(() => {
    const getPrompts = async () => {
      console.log(params.name);

      console.log();
      const response = await fetch("/api/prompt/tag/" + params.name);
      console.log(response);
      const data = await response.json();

      setPrompts(data);
    };

    if (params.name) getPrompts();
  }, []);

  return <PrompCardList data={prompts} />;
};

export default page;
