import React from "react";
import { Main, MediaDiv } from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header1 from "./Header1";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer1 from "./Footer1";
import { Routes, Route } from "react-router-dom";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

const API_URL = "https://reactapitest.pythonanywhere.com/api/";

function App() {
  // const darkMode = true; // 다크모드 구분하는 변수
  // const loading = false; // 로딩을 구분하는 변수
  // const isPost = false; // 포스팅을 구분하는 변수
  // state 형식으로 변경
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header1 darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route
                path="/"
                element={<ShowPostList apiUrl={API_URL} />}
              ></Route>
              <Route
                path="/write"
                element={<WritePost apiUrl={API_URL}></WritePost>}
              ></Route>
              <Route
                path="/post/:postID"
                element={<ShowPost apiUrl={API_URL}></ShowPost>}
              ></Route>
            </Routes>
          </Main>
          <Footer1 />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
