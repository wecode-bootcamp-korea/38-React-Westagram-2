import React, { useState } from 'react';
import './Login.scss';
import Link from 'react-router-dom';

function LoginSol() {
  let [idInput, setIdInput] = useState('');
  let [passwordInput, setPasswordInput] = useState('');

  return (
    <div className="login-sol">
      <div className="login-background">
        <section className="login-container">
          <header className="login-header">
            <span className="logo">Westagram</span>
          </header>
          <form className="login-form">
            <input
              type="text"
              className="id-input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => {
                setIdInput(e.target.value);
              }}
            />
            <input
              type="password"
              className="password-input"
              placeholder="비밀번호"
              onChange={e => {
                setPasswordInput(e.target.value);
              }}
            />
            <button type="button" className="login-btn disabled-btn">
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
