import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginSol() {
  const [idInput, setIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [idValid, setIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [btnOnOff, setBtnOnOff] = useState('disabled-btn');

  const navigate = useNavigate();

  const saveUserId = e => {
    setIdInput(e.target.value);
  };
  const saveUserPassword = e => {
    setPasswordInput(e.target.value);
  };

  const btnHandler = () => {
    idInput.length > 0 && passwordInput.length > 0
      ? setBtnOnOff('')
      : setBtnOnOff('disabled-btn');
  };

  const validationIdAndPassword = () => {
    idInput.includes('@') ? setIdValid(true) : setIdValid(false);
    passwordInput.length > 4 ? setPasswordValid(true) : setPasswordValid(false);
  };

  const moveToMain = () => {
    if (btnOnOff === '') {
      if (idValid === false) {
        alert('이메일에 @를 포함시켜주세요');
      } else if (passwordValid === false) {
        alert('비밀번호는 5자 이상 입력하세요');
      } else {
        navigate('/main-sol');
      }
    }
  };

  useEffect(() => {
    btnHandler();
    validationIdAndPassword();
  }, [idInput, passwordInput]);

  return (
    <div className="login-sol">
      <div className="login-background">
        <section className="login-container">
          <header className="login-header">
            <span className="logo">Westagram</span>
          </header>
          <form
            className="login-form"
            onKeyDown={e => {
              if (e.code === 'Enter') {
                moveToMain();
              }
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
            <button
              type="button"
              className={`login-btn ${btnOnOff}`}
              onClick={moveToMain}
            >
              로그인
            </button>
          </form>
          <footer className="login-footer">
            <Link to="#">비밀번호를 잊으셨나요?</Link>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default LoginSol;
