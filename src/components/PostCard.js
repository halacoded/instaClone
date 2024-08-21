import React from "react";
import "../asset/data/css/style.css";
import { LikeButton } from "./LikeButton";
export const PostCard = ({
  postimage,
  posttitle,
  postdescrtion,
  postlikes,
}) => {
  return (
    <div className="Postcard">
      <img src={postimage} alt="post photo " className="postimage" />
      <h1>{posttitle}</h1>
      <d>{postdescrtion}</d>
      {/* <h4>{postlikes} likes</h4> */}
      <LikeButton intilLikes={postlikes} />
    </div>
  );
};
