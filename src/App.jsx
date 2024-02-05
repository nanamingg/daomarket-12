import { ThemeProvider } from "next-themes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import Agenda from "./pages/Agenda";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import IntroduceDaoMarket from "./pages/IntroduceDaoMarket";
import Vote from "./pages/Vote";
import MarketPlaceDetail from "./pages/MarketPlaceDetail";
import MarketPlaceList from "./pages/MarketPlaceList";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <ThemeProvider attribute="class">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/IntroduceDaoMarket" element={<IntroduceDaoMarket />} />
          <Route path="/Vote" element={<Vote />} />
          <Route path="/MarketPlaceDetail" element={<MarketPlaceDetail />} />
          <Route path="/MarketPlaceList" element={<MarketPlaceList />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// 대략 진행 방향은 페이지(Home, About Us, Contact Us 등등)마다 작동되게 하는 Layout(페이지가 이동되고 Header와 Footer가 고정되는)을 만들고 페이지들 안에 components들을 넣어서 구성하면 될 거 같습니다.

// warning이 여러개 뜬다면 최상위 위치에 .env 생성 후 아래 코드 주석 풀고 입력하기
// GENERATE_SOURCEMAP=false
