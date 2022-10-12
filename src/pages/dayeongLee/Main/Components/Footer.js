import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul className="bottom-text">
        {FOOTER_INFO_LIST.map(info => (
          <li key={info.id}>{info.text}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

const FOOTER_INFO_LIST = [
  { id: 1, text: 'Instagram 정보・지원・홍보 센터・API・' },
  { id: 2, text: '채용 정보・개인정보처리방침・약관・' },
  { id: 3, text: '디렉터리・프로필・해시태그・언어' },
];
