import './Main.scss';

function MainAside() {
  const color = {
    border: '1px solid black',
  };
  return (
    <>
      <section className="asideTop_Main" style={color}>
        <div className="asideTop_listname_main">
          <span className="listname_title">스토리</span>
          <span>더보기</span>
        </div>
        <div className="aside_list_main">
          <img
            className="asideTop_Main_img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <span className="asideTop_Main_text">name_to_name</span>
        </div>
        <div className="aside_list_main">
          <img
            className="asideTop_Main_img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <span className="asideTop_Main_text">name_to_name</span>
        </div>
        <div className="aside_list_main">
          <img
            className="asideTop_Main_img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <span className="asideTop_Main_text">name_to_name</span>
        </div>
      </section>
      <section className="asideTop_Main" style={color}>
        <div className="asideTop_listname_main">
          <span className="listname_title">회원님을 위한 추천</span>
          <span>더보기</span>
        </div>
        <div className="aside_list_main">
          <img
            className="asideTop_Main_img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <span className="asideTop_Main_text">name_to_name</span>
        </div>
        <div className="aside_list_main">
          <img
            className="asideTop_Main_img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <span className="asideTop_Main_text">name_to_name</span>
        </div>
        <div className="aside_list_main">
          <img
            className="asideTop_Main_img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <span className="asideTop_Main_text">name_to_name</span>
        </div>
      </section>
    </>
  );
}

export default MainAside;
