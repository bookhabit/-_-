import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  CursorDiv,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
} from "./styledComponent";
import {
  faArrowsRotate,
  faArrowLeft,
  faArrowRight,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadingIcon } from "./loading.svg";
import EachPost from "./EachPost";
import axios from "axios";

// 서버에서 데이터를 가져와서 포스팅하기 전 미리 구현을 위한 임의 배열
const initialPostList = [
  { id: 1, title: "시사 N 대학기자상 취재" },
  { id: 2, title: "시사 N 대학기자상 취재" },
  { id: 3, title: "시사 N 대학기자상 취재" },
];

const ShowPostList = ({ apiUrl }) => {
  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const addPost = useCallback(() => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "시사 N 대학기자상 취재" },
    ]);
  }, [postList]);

  const navigate = useNavigate();
  const goWirte = () => {
    navigate("/write");
  };
  useEffect(() => {
    axios.get(`${apiUrl}list/?page=1&page_size=10`).then((response) => {
      console.log(response.data);
      setPostList(response.data.results);
      setLoading(false);
    });
  }, []); // 렌더링되고 처음 한번만 실행되도록 빈배열 넣어줌

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWirte} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              로딩중
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>기록된 글이 없습니다</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
};

export default ShowPostList;
