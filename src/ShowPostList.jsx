import React, { useState } from "react";
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

const initialPostList = [
  { id: 1, title: "시사 N 대학기자상 취재", replCount: 1 },
  { id: 2, title: "시사 N 대학기자상 취재", replCount: 43 },
  { id: 3, title: "시사 N 대학기자상 취재", replCount: 2 },
];

const ShowPostList = () => {
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);
  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "시사 N 대학기자상 취재", replCount: 21 },
    ]);
  };
  const navigate = useNavigate();
  const goWirte = () => {
    navigate("/write");
  };

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
                  replCount={element.replCount}
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
