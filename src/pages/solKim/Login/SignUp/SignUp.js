import React from 'react';
import './SignUp.scss';

function SignUp({
  idInput,
  setIdInput,
  passwordInput,
  setPasswordInput,
  setSignUp,
}) {
  const signUpRequest = () => {
    fetch('http://10.58.52.248:3000/user/signup', {
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
        console.log(data);
      })
      .catch(error => alert(error.message));
  };

  return (
    <div
      className="signup"
      onClick={e => {
        e.stopPropagation();
        e.target.className === 'signup' && setSignUp(false);
      }}
    >
      <section className="signup-container">
        <header className="signup-header">
          <h1>SignUp</h1>
        </header>
        <form
          className="signup-form"
          onSubmit={e => {
            e.preventDefault();
            signUpRequest();
          }}
        >
          <input
            type="text"
            placeholder="Email"
            onChange={e => {
              setIdInput(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={e => {
              setPasswordInput(e.target.value);
            }}
          />
          <button>회원가입</button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
