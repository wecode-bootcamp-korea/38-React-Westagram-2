import React, { useRef } from 'react';
import Nav from '../../../components/Nav/Nav';
import Comment from './Components/Comment';
import './Main.scss';
import { useState } from 'react';
import sky from '../../../assets/dayeong/images/sky.jpg';
import blank from '../../../assets/dayeong/images/blank_profile-pic.png';
import city from '../../../assets/dayeong/images/city.jpg';
import '@fortawesome/fontawesome-free/js/all.js';

function MainDayeong() {
  const [commnetValue, setCommentValue] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  // 코멘트 value
  const saveComment = e => {
    setCommentValue(e.target.value);
  };

  // 코멘트 id 저장
  let nextId = useRef(1);

  // 코멘트 추가 버튼 클릭 시 -> 새로운 객체 형태로 반환
  const onSubmit = e => {
    e.preventDefault();
    const comment = {
      text: commnetValue,
      id: nextId.current,
    };

    nextId.current += 1;

    // 배열 안에 추가하기 위해서 실행하는 함수
    addComment(comment);
    setCommentValue('');
  };

  const addComment = cmt => {
    setCommentArr(commentArr.concat(cmt));
  };

  //삭제 -> id 값이 다른 것만 모아서 새로운 배열로 반환
  const onRemove = commentId => {
    setCommentArr(commentArr.filter(el => el.id !== commentId));
  };

  // console.log(commentArr);

  return (
    <div className="mainDayeong">
      <Nav />
      <div className="main-container">
        <div className="feeds">
          <div className="article-container">
            <div className="insta_profile">
              <div className="profile-img">
                <img src={sky} alt="sky" />
              </div>
              <div className="profile-id">
                <span>dayeong_lee</span>
              </div>
            </div>
            <div className="setting-img">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <div className="article">
            <img src={city} alt="city" />
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
            <img src={sky} alt="sky" />
            <span>
              <b>aineworld</b>님 <b>외</b> <b>120명</b>이 좋아합니다
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
              <b>neceosecius</b> 거봐 좋았잖아~~~~~ 🙆🏻‍♀️
            </span>
            <i className="fa-regular fa-heart" />
          </div>
          <div className="comment-time">
            <span>42분 전</span>
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
              value={commnetValue}
              onChange={saveComment}
            />
            <button>게시</button>
          </form>
        </div>
        <div className="main-right">
          <div className="main-right-top">
            <img src={sky} alt="sky" />
            <div className="main-right-text">
              <a href="">wecode_bootcamp</a>
              <span>WeCode | 위코드</span>
            </div>
          </div>
          <div className="main-right-story">
            <header>
              <div className="story-left">스토리</div>
              <div className="story-right">모두보기</div>
            </header>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>yum_s</span>
                <span>16분 전</span>
              </div>
            </div>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>drink_eat_drink</span>
                <span>3시간 전</span>
              </div>
            </div>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>hyukyc</span>
                <span>20시간 전</span>
              </div>
            </div>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>jimimn</span>
              </div>
            </div>
          </div>
          <div className="main-right-recommend">
            <header>
              <div className="recommend-left">회원님을 위한 추천</div>
              <div className="recommend-right">모두보기</div>
            </header>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>yum_s</span>
                <span>_legend_a님 외 2명이 ...</span>
              </div>
              <div className="follow">
                <span>팔로우</span>
              </div>
            </div>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>drink_eat_drink</span>
                <span>ringo.in.seoul님 외 12...</span>
              </div>
              <div className="follow">
                <span>팔로우</span>
              </div>
            </div>
            <div className="story-img">
              <img src={blank} alt="profile" />
              <div className="story-look-one">
                <span>hyukyc</span>
                <span>jimmylee1220님 외 1...</span>
              </div>
              <div className="follow-plus">
                <span>팔로우</span>
              </div>
            </div>
          </div>
          <div className="bottom-text">
            <span>
              Instagram 정보・지원・홍보 센터・API・
              <br />
              채용 정보・개인정보처리방침・약관・
              <br />
              디렉터리・프로필・해시태그・언어
            </span>
            <br />
            <br />
            <span>© 2019 INSTAGRAM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDayeong;
