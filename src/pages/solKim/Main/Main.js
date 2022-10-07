import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './components/Feed';
import SideBar from './components/SideBar';
import './Main.scss';

function MainSol() {
  return (
    <div className="main-sol">
      <div className="background">
        <Nav />
        <main className="main-container">
          <section className="main-feeds-wrapper">
            <Feed />
          </section>
          <SideBar />
        </main>
      </div>
    </div>
  );
}

export default MainSol;
