import LoginInput from './LoginInput';
import { useState, useEffect } from 'react';
import './Login.scss';
import { useNavigate, useRevalidator } from 'react-router-dom';
import LoginFooter from './LoginFooter';

function LoginHyeonseok() {
  const [thisIsIdValue, setThisIsIdValue] = useState('');
  const [thisIsPwValue, setThisIsPwValue] = useState('');

  const clickEvent = () => {
    fetch('http://10.58.52.129:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        name: 'name',
        email: thisIsIdValue,
        password: thisIsPwValue,
        profileImage: 'img',
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'userCreated') {
          localStorage.setItem('TOKEN', data.accesstoken);
          alert('회원가입 성공');
        } else {
          alert('회원가입 실패');
        }
      });
  };

  const clickLoginEvent = () => {
    fetch('http://10.58.52.129:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        email: thisIsIdValue,
        password: thisIsPwValue,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        alert('로그인 성공');
      });
  };

  // const navigate = useNavigate();

  return (
    <div>
      <main className="main_login">
        <div className="total_login">
          <header className="header_login">
            <p className="logo_login">westagram</p>
          </header>
          <div className="input_login">
            <LoginInput
              thisIsIdValue={thisIsIdValue}
              setThisIsIdValue={setThisIsIdValue}
              setThisIsPwValue={setThisIsPwValue}
            />

            {(thisIsIdValue.length &&
              thisIsIdValue.includes('@') &&
              thisIsIdValue.includes('.')) > 0 && thisIsPwValue.length > 6 ? (
              <button className="btn_login" onClick={clickLoginEvent}>
                로그인
              </button>
            ) : (
              <button className="btn_login" disabled>
                로그인
              </button>
            )}
            <button onClick={clickEvent}>회원가입</button>
          </div>
          <footer className="footer_login">
            <section className="footer_line_section_login">
              <hr />
              <span className="footer_line_login">또는</span>
              <hr />
            </section>
            <section className="footer_pwsearch_section_login">
              비밀번호를 잊어버리셨나요?
            </section>
          </footer>
        </div>
        <footer className="FOOTER_MAIN">
          <LoginFooter />
        </footer>
      </main>
    </div>
  );
}

export default LoginHyeonseok;
