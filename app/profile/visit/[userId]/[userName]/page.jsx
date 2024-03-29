"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = ({ params }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.userId}/posts`);
      const data = await response.json();

      console.log(params.userName);
      setMyPosts(data);
    };

    if (params.userId) fetchPosts();
  }, []);

  return (
    <Profile
      name={params.userName}
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myPosts}
      edit={false}
    />
  );
};

export default MyProfile;
