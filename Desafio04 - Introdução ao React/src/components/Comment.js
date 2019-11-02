import React from "react";

export default function Comment({ comments }) {
  return comments.map(comment => (
    <div className="comment">
      <img src={comment.author.avatar} />
      <div id="comment-content">
        <p>
          <strong>{comment.author.name}: </strong>
          {comment.content}
        </p>
      </div>
    </div>
  ));
}
