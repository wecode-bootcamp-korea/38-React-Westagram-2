import LoginInput from './LoginInput';
import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function LoginHyeonseok() {
  const [thisIsIdValue, setThisIsIdValue] = useState('');
  const [thisIsPwValue, setThisIsPwValue] = useState('');

  const navigate = useNavigate();
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
              <button
                className="btn_login"
                onClick={navigate('/main-hyeonseok')}
              >
                로그인
              </button>
            ) : (
              <button className="btn_login" disabled>
                로그인
              </button>
            )}
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
      </main>
    </div>
  );
}

export default LoginHyeonseok;
