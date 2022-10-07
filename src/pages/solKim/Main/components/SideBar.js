import React from 'react';
import Recommend from './Recommend';
import Stories from './Stories';

function SideBar() {
  return (
    <aside className="main-sidebar">
      <header className="sidebar-profile">
        <div className="myprofile-img-wrapper">
          <img alt="profile-pic" src="/images/solKim/myprofile.jpg" />
        </div>
        <div className="myprofile-wrapper">
          <span className="black-font bold-font">wecoder_frontend</span>
          <span className="gray-font">frontend developer</span>
        </div>
      </header>
      <Stories />
      <Recommend />
      <footer className="copyright">
        <div>
          <span className="gray-font">
            Instagram 정보 . 지원 . 홍보 센터 . API . 채용 정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
          </span>
        </div>
        <div>
          <span className="gray-font">ⓒ 2019 INSTAGRAM</span>
        </div>
      </footer>
    </aside>
  );
}

export default SideBar;
