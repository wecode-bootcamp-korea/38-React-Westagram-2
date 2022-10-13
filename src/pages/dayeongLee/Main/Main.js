import React, { useEffect, useRef } from 'react';
import Nav from '../../../components/Nav/Nav';
import Comment from './Components/Comment';
import './Main.scss';
import { useState } from 'react';
import sky from '../../../assets/dayeong/images/sky.jpg';
import blank from '../../../assets/dayeong/images/blank_profile-pic.png';
import city from '../../../assets/dayeong/images/city.jpg';
import '@fortawesome/fontawesome-free/js/all.js';
import Footer from './Components/Footer';
import Feeds from './Components/Feeds';

function MainDayeong() {
  const [commentValue, setCommentValue] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    fetch('/data/dayeongUsers.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  // console.log(feeds);

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
      text: commentValue,
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
        <div>
          {feeds &&
            feeds.map(feed => (
              <Feeds
                commentArr={commentArr}
                onRemove={onRemove}
                onSubmit={onSubmit}
                commentValue={commentValue}
                onChange={saveComment}
                key={feed.id}
                feed={feed}
              />
            ))}
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainDayeong;
