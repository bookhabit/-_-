import React from "react";
import {
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

const ShowPostList = ({ loading, isPost, addPost, postList }) => {
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <FontAwesomeIcon icon={faPenToSquare} />
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
