import MainFeed from './MainFeed';
import MainAside from './MainAside';
import MainHeader from './MainHeader';

function Main() {
  return (
    <div className="hyeonseok_main">
      <MainHeader />
      <div className="whole_main">
        <main className="feed_main">
          <MainFeed />
        </main>
        <aside className="aside_main">
          <MainAside />
        </aside>
      </div>
    </div>
  );
}

export default Main;
