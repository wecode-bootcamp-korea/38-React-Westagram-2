import React, { useId, useState } from 'react';
import { useNavigate, useRevalidator } from 'react-router-dom';
import { useRef } from 'react';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const btn = useRef();
  const navigate = useNavigate();

  const onIdChange = e => {
    setId(e.target.value);
    // console.log(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };
  const changeColor = () => {
    if (id === '' && password === '') {
      btn.current.style.backgroundColor = 'black';
    } else if (id.length > 1 && password.length > 6) {
      btn.current.style.backgroundColor = '#0095f6';
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    e.currentTarget.disabled = false;
    // navigate('/main');
    loginAuthorization();

    // const changeColor = () => {
    //   if (id === '' && password === '') {
    //     btn.current.style.backgroundColor = 'black';
    //   } else if (id.length > 1 && password.length > 6) {
    //     btn.current.style.backgroundColor = '#0095f6';
    //   }
    // };
    // console.log();
    function loginAuthorization() {
      fetch('http://10.58.52.150:3000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: id,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('token', data.accessToken);
        });
    }
  };

  return (
    <div className="LoginDayeong">
      <h1>Westagram</h1>
      <form className="login-container" onSubmit={onSubmit}>
        <input
          className="text"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="username"
          value={id}
          onChange={onIdChange}
          onKeyUp={changeColor}
          required
        />
        <br />
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onPasswordChange}
          onKeyUp={changeColor}
          required
        />
        <br />
        <button className="btton" name="button" ref={btn}>
          로그인
        </button>
      </form>
      <p>비밀번호를 잊으셨나요?</p>
    </div>
  );
};

export default Login;
