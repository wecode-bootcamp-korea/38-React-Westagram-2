import React from 'react';
import Stories from './Stories';
import Recommend from './Recommend';
import { SIDEBAR_FOOTER } from './data/SIDEBAR_FOOTER';

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
          <ul className="sidebar-footer gray-font">
            {SIDEBAR_FOOTER.map(menu => {
              return <li key={menu.id}>{menu.menuName}</li>;
            })}
          </ul>
        </div>
        <div>
          <span className="gray-font">ⓒ 2019 INSTAGRAM</span>
        </div>
      </footer>
    </aside>
  );
}

export default SideBar;
