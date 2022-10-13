import React, { useState } from 'react';

function Comments({ commentList, removeComment, feed }) {
  return (
    <ul id="comment-box">
      <li className="comment-contents">
        <span className="black-font bold-font">{feed.userId}</span>
        <span className="black-font">{feed.feedText}</span>
      </li>
      {commentList.map((comment, i) => {
        return (
          <Comment
            removeComment={removeComment}
            comment={comment}
            i={i}
            key={comment.key}
          />
        );
      })}
    </ul>
  );
}

function Comment({ removeComment, comment, i }) {
  const [heartIcon, setHeartIcon] = useState('far');
  const heartIconHandler = () => {
    heartIcon === 'far' ? setHeartIcon('fas red-heart') : setHeartIcon('far');
  };

  return (
    <li className="comment-contents">
      <span className="black-font bold-font">{comment.userId}</span>
      <span className="black-font comment">{comment.comment}</span>
      <i
        className={`${heartIcon} fa-heart gray-font float-right blank-heart comment-blank-heart`}
        onClick={() => {
          heartIconHandler();
        }}
      />
      <span className="blue-font delete" onClick={() => removeComment(i)}>
        삭제
      </span>
    </li>
  );
}

export default Comments;
