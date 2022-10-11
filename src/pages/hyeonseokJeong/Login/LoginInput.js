import './Login.scss';

function LoginInput(props) {
  function keyEventId(e) {
    return props.setThisIsIdValue(e.target.value);
  }
  function keyEventPw(e) {
    return props.setThisIsPwValue(e.target.value);
  }

  // console.log(keyEventId)
  return (
    <>
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        className="id_login"
        onChange={keyEventId}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="pw_login"
        onChange={keyEventPw}
      />
    </>
  );
}

export default LoginInput;
