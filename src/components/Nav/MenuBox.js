import React from 'react';
import { Link } from 'react-router-dom';

function MenuBox() {
  return (
    <div className="menu-box">
      <div>
        <i className="far fa-user" />
        <Link to="/login-dayeong">Dayeong</Link>
      </div>
      <div>
        <i className="far fa-user" />
        <Link to="/login-hyeonseok">HyeonSeok</Link>
      </div>
      <div>
        <i className="far fa-user" />
        <Link to="/login-sol">Sol</Link>
      </div>
    </div>
  );
}

export default MenuBox;
