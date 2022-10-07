import React from 'react';

function Stories() {
  return (
    <section className="sidebar-story">
      <header className="sidebar-story-header">
        <span className="gray-font">스토리</span>
        <span className="black-font bold-font">모두 보기</span>
      </header>
      <div className="sidebar-story-content">
        <div className="story">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile3.jpg" />
          </div>
          <div>
            <span className="black-font bold-font">sunglass_dog</span>
            <span className="gray-font">5분 전</span>
          </div>
        </div>
        <div className="story">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile4.jpg" />
          </div>
          <div>
            <span className="black-font bold-font">iam_ghost</span>
            <span className="gray-font">10분 전</span>
          </div>
        </div>
        <div className="story">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile5.jpg" />
          </div>
          <div>
            <span className="black-font bold-font">dogdogdog</span>
            <span className="gray-font">45분 전</span>
          </div>
        </div>
        <div className="story">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile6.jpg" />
          </div>
          <div>
            <span className="black-font bold-font">hello_human</span>
            <span className="gray-font">1시간 전</span>
          </div>
        </div>
        <div className="story">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile7.jpg" />
          </div>
          <div>
            <span className="black-font bold-font">sunglass_man</span>
            <span className="gray-font">5시간 전</span>
          </div>
        </div>
        <div className="story">
          <div className="profile-img-wrapper">
            <img alt="profile-pic" src="/images/solKim/profile8.jpg" />
          </div>
          <div>
            <span className="black-font bold-font">red_profile</span>
            <span className="gray-font">12시간 전</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
