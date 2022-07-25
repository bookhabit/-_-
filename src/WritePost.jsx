import React, { useState } from "react";
import WriteTitle from "./WriteTitle";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from "./styledComponent";
import InputPost from "./InputPost";

const SubmitComponent = () => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
);

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
      <WriteTitle />
      <PostWriteDiv>
        <InputPost
          onChange={onChange}
          title={title}
          contents={contents}
        ></InputPost>
      </PostWriteDiv>
      <SubmitComponent />
    </PostSection>
  );
};

export default WritePost;
