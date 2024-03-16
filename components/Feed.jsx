"use client";

import { useState, useEffect } from "react";

import PrompCard from "./PrompCard";

export const PrompCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-15 prompt_layout">
      {data.map((post) => (
        <PrompCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);

  const filterPost = (text) => {
    setFilteredPost(
      posts.filter(
        (elem) =>
          elem.prompt.includes(text) ||
          elem.creator.username.includes(text) ||
          elem.tag.includes(text)
      )
    );
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    filterPost(e.target.value);
  };

  const handleTagClick = (tag) => {
    console.log(tag, "tag");
    setSearchText(tag);
    filterPost(tag);
    // handleSearchChange(tag);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
      setFilteredPost(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PrompCardList data={filteredPost} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
