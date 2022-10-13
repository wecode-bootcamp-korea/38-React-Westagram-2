import React from 'react';
import sky from '../../../../assets/dayeong/images/sky.jpg';
import city from '../../../../assets/dayeong/images/city.jpg';
import Comment from './Comment';

const Feeds = props => {
  const { commentArr, onRemove, onSubmit, commentValue, onChange, feed } =
    props;

  // console.log(feed);
  return (
    <div className="feeds">
      <div className="article-container">
        <div className="insta_profile">
          <div className="profile-img">
            <img src={sky} alt="sky" />
          </div>
          <div className="profile-id">
            <span>{feed.username}</span>
          </div>
        </div>
        <div className="setting-img">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div className="article">
        <img src={feed.feedimg} alt="city" />
      </div>
      <div className="article-icon">
        <div className="icon-left">
          <i className="fa-solid fa-heart feed-heart icon-size" />
          <i className="fa-regular fa-comment icon-size" />
          <i className="fa-solid fa-arrow-up-from-bracket feed-share icon-size" />
        </div>
        <div className="icon-right">
          <i className="fa-regular fa-bookmark icon-size" />
        </div>
      </div>
      <div className="like-img">
        <img src={feed.like.userprofile} alt="sky" />
        <span>
          <b>{feed.like.username}</b>님 <b>외</b> <b>120명</b>이 좋아합니다
        </span>
      </div>
      <div className="comment-one">
        <span>
          <b>canon_mj</b> 위워크에서 진행한 베이킹 클래스...
        </span>
        <span>더 보기</span>
      </div>
      <div className="comment-two">
        <span>
          <b>{feed.comment.commentId}</b> {feed.comment.text}
        </span>
        <i className="fa-regular fa-heart" />
      </div>
      <div className="comment-time">
        <span>{feed.feedtime}</span>
      </div>
      <div className="comment-container">
        {commentArr.map(element => (
          <Comment element={element} onRemove={onRemove} />
        ))}
      </div>

      <form className="reply" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="댓글 달기..."
          value={commentValue}
          onChange={onChange}
        />
        <button>게시</button>
      </form>
    </div>
  );
};

export default Feeds;
