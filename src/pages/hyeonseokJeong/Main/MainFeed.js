import { useRef, useState } from 'react';
import './Main.scss';

function MainFeed() {
  // const [form, setForm] = useState({
  //   userInput: '',
  //   comment: []
  // })

  // const [userInput, comment] = form

  // const onChange = (e) => {
  //   const nextForm = {
  //     ...form,
  //     [e.target.name]: e.target.value
  //   }
  //   setForm(nextForm)
  // }
  //내가 할려는 거 = 타겟의 value값을 Comment에 넣어줘야함
  // const onClick = () => {
  //   const commentAdd = comment[...form, onChange]
  //   setForm.comment(comment)
  //   }

  const [commentValue, setCommentValue] = useState('');

  const onChange = e => {
    setCommentValue(e.target.value);
  };

  const [commentBox, setCommentBox] = useState([]);

  let nextId = useRef(1);

  const onClick = () => {
    if (commentValue === '') {
      return;
    }

    const comment = {
      text: commentValue,
      id: nextId.current,
    };

    nextId.current += 1;

    setCommentBox(commentBox.concat(comment));
    // onAdd(comment);
    setCommentValue('');
  };

  //  const onAdd = (msg) => {
  //   setCommentBox(commentBox.concat(msg));
  //  }

  // console.log(commentBox);

  const namesList = commentBox.map(item => (
    <li key={item.id} className="comment_li">
      hyeonseok {item.text}{' '}
      <span onClick={() => commentD(item.id)}>
        <i class="fa-regular fa-x comment_li_i" />
      </span>
    </li>
  ));

  const commentD = id => {
    const next = commentBox.filter(item => item.id !== id);
    setCommentBox(next);
  };

  const keyEnter = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <>
      <div className="Feed_header_main">
        <img
          className="feed_header_main_img"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <span>HyeonSeok</span>
      </div>
      <div className="Feed_img_main">
        <img
          className="feed_img_main_img"
          src="https://images.unsplash.com/photo-1544038659-12337883d216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <div className="Feed_likeicon_main">
        <div className="feed_likeicon_left_main">
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-comment" />
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </div>
        <div className="feed_likeicon_right_main">
          <i className="fa-solid fa-check" />
        </div>
      </div>
      <div className="Feed_usertext_main">
        <img
          className="user_img"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <span>aineworld님 외 10명이 좋아합니다.</span>
      </div>
      <div className="Feed_comment_main">
        <ul className="comment_ul">
          <div>Hyeonseok 사진입니다</div>
          {namesList}
        </ul>
      </div>
      <div className="Feed_userinput_main">
        <input
          type="text"
          name="userInput"
          placeholder="댓글"
          className="Feed_userinput_value_main"
          value={commentValue}
          onChange={onChange}
          onKeyPress={keyEnter}
        />
        <button className="Feed_userinput_btn_main" onClick={onClick}>
          게시
        </button>
      </div>
    </>
  );
}

export default MainFeed;
