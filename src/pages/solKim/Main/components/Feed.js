import React from 'react';
import Comments from './Comments';
import { useState } from 'react';

function Feed() {
  let [commentList, setCommentList] = useState([
    {
      key: 'sample',
      id: 'alphgo',
      comment: '소통해요~',
    },
  ]);
  let [heartIcon, setHeartIcon] = useState('far');

  const pushComment = () => {
    const commentInput = document.querySelector('.comment-input');
    let copy = [...commentList];
    if (commentInput.value.trim()) {
      let randomNumber = new Date().getTime() + Math.random();
      let obj = {};
      obj.key = randomNumber;
      obj.id = 'wecoder_frontend';
      obj.comment = commentInput.value;
      copy.push(obj);
      setCommentList(copy);
      commentInput.value = '';
    }
  };

  const enterPushComment = e => {
    e.preventDefault();
    pushComment();
  };

  const removeComment = i => {
    let copy = [...commentList];
    copy.splice(i, 1);
    setCommentList(copy);
  };

  const heartIconHandler = () => {
    heartIcon === 'far' ? setHeartIcon('fas red-heart') : setHeartIcon('far');
  };
  return (
    <section className="main-feeds">
      <header className="feeds-header">
        <div className="feeds-profile">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile1.jpg" />
          </div>
          <span className="black-font bold-font">dog_dogdog</span>
        </div>
        <div className="feeds-header-menu">
          <i className="fas fa-ellipsis-h" />
        </div>
      </header>
      <div className="feeds-img">
        <img alt="park" src="/images/solKim/park.jpg" />
      </div>
      <div className="feeds-status">
        <div className="feeds-status-left">
          <i
            className={`${heartIcon} fa-heart blank-heart`}
            onClick={() => {
              heartIconHandler();
            }}
          />
          <i className="fas fa-heart red-heart display-none" />
          <i className="far fa-comment" />
          <i className="far fa-paper-plane" />
        </div>
        <div className="feeds-status-right">
          <i className="far fa-bookmark" />
        </div>
      </div>
      <div className="feeds-like">
        <div className="feeds-like-img">
          <img alt="profile-pic" src="/images/solKim/profile2.jpg" />
        </div>
        <span className="black-font bold-font">human_human</span>
        <span className="black-font">님 외&nbsp;</span>
        <span className="black-font bold-font">10명</span>
        <span className="black-font">이 좋아합니다.</span>
      </div>
      <div className="feeds-comment">
        <div>
          <Comments commentList={commentList} removeComment={removeComment} />
          <span className="gray-font">42분 전</span>
        </div>
      </div>
      <form
        className="feeds-comment-form"
        onSubmit={e => {
          enterPushComment(e);
        }}
      >
        <input
          className="comment-input black-font"
          type="text"
          placeholder="댓글 달기..."
        />
        <button
          className="comment-btn blue-font"
          type="button"
          onClick={pushComment}
        >
          게시
        </button>
      </form>
    </section>
  );
}

export default Feed;
