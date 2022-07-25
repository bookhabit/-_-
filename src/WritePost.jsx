import React, { useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
  PostTitle,
  PostTitleDiv,
  TitleInput,
  ContentsInput,
} from "./styledComponent";

const WritePost = () => {
  // useState
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  const { title, contents } = inputs;

  // 2개를 동시에 관리하기 위한 객체

  // onChange함수
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <PostSection>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput
          name="title"
          value={title}
          placeholder="제목을 입력해주세요. (15자 이내)"
          onChange={onChange}
        />
        <ContentsInput
          name="contents"
          value={contents}
          cols="30"
          rows="10"
        ></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
};

export default WritePost;
