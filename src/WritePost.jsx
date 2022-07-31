import React, { useState } from "react";
import WriteTitle from "./WriteTitle";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from "./styledComponent";
import InputPost from "./InputPost";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = ({ apiUrl }) => {
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

  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post(`${apiUrl}posts/`, {
        title: inputs.title,
        contents: inputs.contents,
        repls: [],
      })
      .then((response) => {
        console.log(response);
        navigate("../");
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
      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );
};

export default WritePost;
