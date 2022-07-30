import React, { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  LoadingDiv,
  LoadingImg,
  PostReplDiv,
  ReplTitleDiv,
  ReplWriter,
  Repl,
  WriterDiv,
  ReplInput,
  ReplSubmitDiv,
} from "./styledComponent";
import axios from "axios";

// const postData = {
//   title: `바운스`,
//   contents: `아기사자가 돌아서면 두 눈이 마주칠까, 심장이 bounce, bounce 두근 대 들릴까 봐 겁나
//   한참을 망설이다 용기를 내 밤새워 준비한 내 개사 들어줘, 처음 본 순간부터 아기사자랑 친해질꺼야 생각했어~~,
//   Baby, you're my trampoline You make me bounce Bounde - 아기사자들은 다 귀여워 최고 -
//   `,
// };

// const replData = [
//   { id: 2, contents: `반가워요!` },
//   { id: 3, contents: `멋쟁이 사자처럼 최고!` },
// ];

const PostAndRepl = React.memo(
  ({ post, postLoading, replCount, replLoading, repls }) => {
    return (
      <>
        <PostTitleDiv>
          <PostTitle>{post && post.title}</PostTitle>
        </PostTitleDiv>

        {postLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          <PostReplDiv>{post && post.contents}</PostReplDiv>
        )}
        <ReplTitleDiv>댓글{replCount}</ReplTitleDiv>
        {replLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          repls &&
          repls.map((element) => (
            <PostReplDiv key={element.id}>
              <ReplWriter>익명</ReplWriter>
              <Repl>{element.contents}</Repl>
            </PostReplDiv>
          ))
        )}
      </>
    );
  }
);

const ShowPost = ({ apiUrl }) => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  // 실제 데이터 가져오기
  useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.postID}`).then((response) => {
      setPost(response.data);
      setPostLoading(false);
      setRepls(response.data.repls);
      setReplLoading(false);
      replInput.current.focus();
      console.log(response);
    });
  }, []);

  // //useEffect 2개 사용하기 - 미리 만들어둔 연습용
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPost(postData);
  //     setPostLoading(false);
  //   }, 300);
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRepls(replData);
  //     setReplLoading(false);
  //     replInput.current.focus();
  //   }, 1000);
  // });

  //input창 상태관리
  const [repl, setRepl] = useState("");

  const onChange = (e) => {
    setRepl(e.target.value);
    // console.log(repl);
  };

  // 댓글 개수 세기
  const countRepls = (repls) => {
    console.log("리뷰 개수 세는 중 ...");
    return repls.length;
  };
  //memo hook실습
  // const replCount = countRepls(repls);
  const replCount = useMemo(() => countRepls(repls), [repls]);

  // 댓글 입력란에 포커스주기
  const replInput = useRef();

  return (
    <div>
      <PostSection>
        <PostAndRepl
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          replLoading={replLoading}
          repls={repls}
        />
        <WriterDiv>
          <ReplInput
            ref={replInput}
            onChange={onChange}
            value={repl}
          ></ReplInput>
          <ReplSubmitDiv>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
