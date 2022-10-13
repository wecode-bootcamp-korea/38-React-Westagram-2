import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import './Login.scss';

function LoginSol() {
  const [idInput, setIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const isNotBlank = idInput.length > 0 && passwordInput.length > 0;
  const isIdValidate = idInput.includes('@');
  const isPwValidate = passwordInput.length > 4;

  const saveUserId = e => {
    setIdInput(e.target.value);
  };
  const saveUserPassword = e => {
    setPasswordInput(e.target.value);
  };

  const moveToMain = () => {
    if (isNotBlank) {
      if (!isIdValidate) {
        alert('이메일에 @를 포함시켜주세요');
      } else if (!isPwValidate) {
        alert('비밀번호는 5자 이상 입력하세요');
      } else {
        navigate('/main-sol');
      }
    }
  };
  const loginRequest = () => {
    fetch('http://10.58.52.248:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: idInput,
        password: passwordInput,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} 에러가 발생했습니다.`);
        }
        response.json();
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        setToken(localStorage.getItem('token'));
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div className="login-sol">
      {signUp && (
        <SignUp
          idInput={idInput}
          passwordInput={passwordInput}
          setIdInput={setIdInput}
          setPasswordInput={setPasswordInput}
          setSignUp={setSignUp}
        />
      )}
      <div className="login-background">
        <section className="login-container">
          <header className="login-header">
            <span className="logo">Westagram</span>
          </header>
          <form
            className="login-form"
            onSubmit={e => {
              e.preventDefault();
              loginRequest();
              moveToMain();
            }}
          >
            <input
              type="text"
              className="id-input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => {
                saveUserId(e);
              }}
            />
            <input
              type="password"
              className="password-input"
              placeholder="비밀번호"
              onChange={e => {
                saveUserPassword(e);
              }}
            />
            <button className={`login-btn ${isNotBlank ? '' : 'disabled-btn'}`}>
              로그인
            </button>
          </form>
          <footer className="login-footer">
            <p
              onClick={() => {
                signUp || setSignUp(true);
              }}
            >
              회원가입
            </p>
            <Link to="#">비밀번호를 잊으셨나요?</Link>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default LoginSol;
