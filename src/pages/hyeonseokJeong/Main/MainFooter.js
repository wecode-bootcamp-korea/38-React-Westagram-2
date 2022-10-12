const MainFooter = () => {
  return (
    <div className="Footer_Main">
      <ul>
        {FOOTER_INFO_LIST.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

const FOOTER_INFO_LIST = [
  { id: 1, text: '소개' },
  { id: 2, text: '도움말' },
  { id: 3, text: 'API' },
  { id: 4, text: '채용 정보' },
  { id: 5, text: '개인정보처리방침' },
  { id: 6, text: '약관' },
  { id: 7, text: '위치' },
  { id: 8, text: '인기계정' },
  { id: 9, text: '혜시태그' },
  { id: 10, text: '언어' },
];

export default MainFooter;
