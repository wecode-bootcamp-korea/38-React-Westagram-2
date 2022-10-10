import React, { useState } from 'react';

function Comments({ commentList, removeComment }) {
  return (
    <ul id="comment-box">
      <li className="comment-contents">
        <span className="black-font bold-font">dog_dogdog</span>
        <span className="black-font">공원 갔다왔는데 사람이 하나도...</span>
        <span className="gray-font">더 보기</span>
      </li>
      {commentList.map((a, i) => {
        return (
          <Comment removeComment={removeComment} a={a} i={i} key={a.key} />
        );
      })}
    </ul>
  );
}

function Comment({ removeComment, a, i }) {
  const [heartIcon, setHeartIcon] = useState('far');
  const heartIconHandler = () => {
    heartIcon === 'far' ? setHeartIcon('fas red-heart') : setHeartIcon('far');
  };

  return (
    <li className="comment-contents">
      <span className="black-font bold-font">{a.id}</span>
      <span className="black-font comment">{a.comment}</span>
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
