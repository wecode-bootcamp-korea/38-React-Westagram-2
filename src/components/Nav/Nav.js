import React, { useState } from 'react';
import './Nav.scss';
import MenuBox from './MenuBox';

function Nav() {
  const [menuBoxSwitch, setMenuBoxSwitch] = useState(false);
  const menuBoxHandler = () => {
    menuBoxSwitch === false ? setMenuBoxSwitch(true) : setMenuBoxSwitch(false);
    console.log(menuBoxSwitch);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="nav-logo-img">
            <img alt="instagram logo" src="/images/instagram.png" />
          </div>
          <span>twostagram</span>
        </div>
        <div className="nav-search">
          <span className="search-icon search-icon-default">
            <i className="fas fa-search" />
          </span>
          <input type="text" placeholder="검색" className="search-input" />
        </div>
        <div className="nav-status">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i
            className="far fa-user nav-profile-icon"
            onClick={menuBoxHandler}
          />
        </div>
        {menuBoxSwitch ? <MenuBox /> : null}
      </div>
    </nav>
  );
}

export default Nav;
