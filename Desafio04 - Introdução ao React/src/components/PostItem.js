import React from "react";

import Comment from "./Comment";

export default function PostItem({ post }) {
  return (
    <div id="post">
      <div className="user-info">
        <img src={post.author.avatar}></img>
        <strong>
          {post.author.name}
          <span>{post.date}</span>
        </strong>
      </div>
      <p id="content">{post.content}</p>
      <Comment comments={post.comments} />
    </div>
  );
}
