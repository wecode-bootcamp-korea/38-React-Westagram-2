import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './components/Feed';
import SideBar from './components/SideBar';
import './Main.scss';

function MainSol() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/solKim/feeds.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="main-sol">
      <div className="background">
        <Nav />
        <main className="main-container">
          <section className="main-feeds-wrapper">
            {feedList.map(feed => {
              return <Feed key={feed.id} feed={feed} />;
            })}
          </section>
          <SideBar />
        </main>
      </div>
    </div>
  );
}

export default MainSol;
