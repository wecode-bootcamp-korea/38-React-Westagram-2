import MainFeed from './MainFeed';
import MainAside from './MainAside';
import MainFooter from './MainFooter';
import Nav from '../../../components/Nav/Nav';

function MainHyeonseok() {
  return (
    <div className="hyeonseok_main">
      <Nav />
      <div className="whole_main">
        <main className="feed_main">
          <MainFeed />
        </main>
        <aside className="aside_main">
          <MainAside />
        </aside>
      </div>
      <footer className="FOOTER_MAIN">
        <MainFooter />
      </footer>
    </div>
  );
}

export default MainHyeonseok;
