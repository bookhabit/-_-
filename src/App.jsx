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

function App() {
  const initialPostList = [
    { id: 1, title: "시사 N 대학기자상 취재", replCount: 1 },
    { id: 2, title: "시사 N 대학기자상 취재", replCount: 43 },
    { id: 3, title: "시사 N 대학기자상 취재", replCount: 2 },
  ];
  // const darkMode = true; // 다크모드 구분하는 변수
  // const loading = false; // 로딩을 구분하는 변수
  // const isPost = false; // 포스팅을 구분하는 변수
  // state 형식으로 변경
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);
  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "시사 N 대학기자상 취재", replCount: 21 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header1 darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer1 />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
