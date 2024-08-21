import React from "react";
import posts from "../asset/data/data/posts";
import { PostCard } from "./PostCard";

export const PostList = () => {
  const Displayposts = posts.map((post) => {
    return (
      <PostCard
        postimage={post.image}
        posttitle={post.title}
        postdescrtion={post.description}
        postlikes={post.likes}
      />
    );
  });

  return <div className="postSection">{Displayposts}</div>;
};
