import React from 'react';
import Comments from './Comments';
import { useState } from 'react';

function Feed({ feed }) {
  const [commentList, setCommentList] = useState(feed.commentList);
  const [heartIcon, setHeartIcon] = useState('far');
  const [commentValue, setCommentValue] = useState('');

  const pushComment = () => {
    let copy = [...commentList];
    if (commentValue.trim()) {
      let randomNumber = new Date().getTime() + Math.random();
      let obj = {};
      obj.key = randomNumber;
      obj.userId = 'wecoder_frontend';
      obj.comment = commentValue;
      copy.push(obj);
      setCommentList(copy);
      setCommentValue('');
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
            <img alt="profile-pic" src={feed.userProfilePic} />
          </div>
          <span className="black-font bold-font">{feed.userId}</span>
        </div>
        <div className="feeds-header-menu">
          <i className="fas fa-ellipsis-h" />
        </div>
      </header>
      <div className="feeds-img">
        <img alt="park" src={feed.feedPhoto} />
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
          <img alt="profile-pic" src={feed.recentLikeProfilePic} />
        </div>
        <span className="black-font bold-font">{feed.recentLike}</span>
        <span className="black-font">님 외&nbsp;</span>
        <span className="black-font bold-font">{feed.likes - 1}명</span>
        <span className="black-font">이 좋아합니다.</span>
      </div>
      <div className="feeds-comment">
        <div>
          <Comments
            commentList={commentList}
            removeComment={removeComment}
            feed={feed}
          />
          <span className="gray-font">{feed.uploadTime}</span>
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
          onChange={e => {
            setCommentValue(e.target.value);
          }}
          value={commentValue}
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
