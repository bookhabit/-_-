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
// const initialPostList = [
//   { id: 1, title: "시사 N 대학기자상 취재" },
//   { id: 2, title: "시사 N 대학기자상 취재" },
//   { id: 3, title: "시사 N 대학기자상 취재" },
// ];

const ShowPostList = ({ apiUrl }) => {
  const [loading, setLoading] = useState(true);
  // const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [totalLastPage, setTotalLastPage] = useState();

  const getPostList = useCallback(() => {
    setLoading(true);
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then((response) => {
      console.log(response.data);
      setTotalLastPage(response.data.count);
      // const lastPage = Math.ceil(response.data.count / 30); // 전체 페이지 개수
      let lastPage = 1;
      if (page % 5 == 0) {
        lastPage = page; // page%5  0으로 나누어진 다는 것은 5의 배수로 마지막 페이지 라는 뜻
      } else {
        lastPage = (parseInt(page / 5) + 1) * 5;
      }
      console.log("lastpage : ", lastPage);

      const tempPages = [];
      for (let i = lastPage - 4; i <= lastPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);

      setPostList(response.data.results);
      setLoading(false);
    });
  });

  // const addPost = useCallback(() => {
  //   setPostList((postList) => [
  //     ...postList,
  //     { id: 4, title: "시사 N 대학기자상 취재" },
  //   ]);
  // }, [postList]);

  const navigate = useNavigate();
  const goWirte = () => {
    navigate("/write");
  };
  useEffect(getPostList, [page]);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={getPostList}
            icon={faArrowsRotate}
          />
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
          ) : postList.length === 0 ? (
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
      <PagingSection style={{ cursor: "pointer" }}>
        <PagenumberDiv
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        {pages.map((pageNum) => (
          <PagenumberDiv
            key={pageNum}
            onClick={() => {
              setPage(pageNum);
              //console.log(pageNum);
            }}
          >
            {pageNum}
          </PagenumberDiv>
        ))}
        <PagenumberDiv
          onClick={() => {
            console.log(totalLastPage);
            if (totalLastPage > page) {
              setPage(page + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
};

export default ShowPostList;
