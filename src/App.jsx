import { ThemeProvider } from "next-themes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import Agenda from "./pages/Agenda";
import Contact from "./pages/Contact";
import Header from "./components/Header";

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// import { ThemeProvider } from "next-themes";
// import Home from "./pages/Home";
// import { BrowserRouter, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <ThemeProvider attribute="class">
//       <BrowserRouter>
//         <Route path="/" element={<Home />} />
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// };

// export default App;

// 다크모드 토글은 작동되게 만들었으나 색 조절로 아직 미구현
// 대략 진행 방향은 페이지(Home, About Us, Contact Us 등등)마다 작동되게 하는 Layout(페이지가 이동되고 Header와 Footer가 고정되는)을 만들고 페이지들 안에 components들을 넣어서 구성하면 될 거 같습니다.
