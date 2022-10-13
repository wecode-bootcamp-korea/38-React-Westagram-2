import React from 'react';

function Recommend() {
  return (
    <section className="sidebar-recommend">
      <header className="sidebar-recommend-header">
        <span className="gray-font">회원님을 위한 추천</span>
        <span className="black-font bold-font">모두 보기</span>
      </header>
      <div className="sidebar-recommend-content">
        <div className="recommend">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile9.jpg" />
          </div>
          <div className="recommend-profile-wrapper">
            <span className="black-font bold-font recommend-profile-name">
              raincoat
            </span>
            <span className="gray-font now-follow">
              manmanman님 외 15명이 팔로우하고 있습니다.
            </span>
          </div>
          <div className="follow">
            <span className="blue-font">팔로우</span>
          </div>
        </div>
        <div className="recommend">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile10.jpg" />
          </div>
          <div className="recommend-profile-wrapper">
            <span className="black-font bold-font">iamnotacat</span>
            <span className="gray-font now-follow">
              alphago님 외 30명이 팔로우하고 있습니다.
            </span>
          </div>
          <div className="follow">
            <span className="blue-font">팔로우</span>
          </div>
        </div>
        <div className="recommend">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile11.jpg" />
          </div>
          <div className="recommend-profile-wrapper">
            <span className="black-font bold-font">hi_hello_hi</span>
            <span className="gray-font now-follow">
              김철수님 외 15명이 팔로우하고 있습니다.
            </span>
          </div>
          <div className="follow">
            <span className="blue-font">팔로우</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommend;
