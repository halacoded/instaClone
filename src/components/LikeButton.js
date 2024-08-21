import React, { useState } from "react";
import "../asset/data/css/style.css";

export const LikeButton = ({ intilLikes }) => {
  const [likes, setLikes] = useState(intilLikes);
  const [Liked, setLiked] = useState(false);

  const HandelLikeCLick = () => {
    if (Liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!Liked);
  };
  return (
    <div className="buttonContainer">
      <p>
        <strong>{likes} likes</strong>
      </p>
      <button
        className={`Likebutton ${Liked ? "clicked" : ""}`}
        onClick={() => HandelLikeCLick()}
      >
        Like
      </button>
    </div>
  );
};
