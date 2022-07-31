import {
  Header,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
} from "./styledComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useNavigate } from "react-router-dom";
function Header1({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  const navigate = useNavigate();
  const onClickMain = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <Header>
        <TitleLogoDiv onClick={onClickMain} style={{ cursor: "pointer" }}>
          <TitleBig>멋사</TitleBig>
          <TitleSmall>익명게시판</TitleSmall>
        </TitleLogoDiv>
        <SubHeaderDiv>
          {darkMode ? (
            <div>
              <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
            </div>
          ) : (
            <div>
              <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
            </div>
          )}
        </SubHeaderDiv>
      </Header>
    </div>
  );
}

export default Header1;
