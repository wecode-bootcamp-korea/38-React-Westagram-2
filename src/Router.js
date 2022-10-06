import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDayeong from './pages/dayeongLee/Main/Main';
import LoginDayeong from './pages/dayeongLee/Login/Login';
import MainHyeonseok from './pages/hyeonseokJeong/Main/Main';
import LoginHyeonseok from './pages/hyeonseokJeong/Login/Login';
import MainSol from './pages/solKim/Main/Main';
import LoginSol from './pages/solKim/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-dayeong" element={<LoginDayeong />} />
        <Route path="/main-dayeong" element={<MainDayeong />} />
        <Route path="/login-hyeonseok" element={<LoginHyeonseok />} />
        <Route path="/main-hyeonseok" element={<MainHyeonseok />} />
        <Route path="/login-sol" element={<LoginSol />} />
        <Route path="/main-sol" element={<MainSol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
