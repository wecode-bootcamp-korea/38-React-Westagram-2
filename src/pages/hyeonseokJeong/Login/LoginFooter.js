import { useState, useEffect } from 'react';

const LoginFooter = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/FooterLogin.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="Footer_Main">
      <ul>
        {productList.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoginFooter;
