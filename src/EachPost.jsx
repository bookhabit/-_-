import React from "react";
import { EachPostLi, PostLink, EachPostHover } from "./styledComponent";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const EachPost = ({ title, postID }) => {
  const navigate = useNavigate();

  const goPost = () => {
    navigate(`${"/post/" + postID}`);
  };
  return (
    <div>
      <EachPostHover>
        <EachPostLi onClick={goPost} style={{ cursor: "pointer" }}>
          <div>
            <FontAwesomeIcon icon={faLocationPin} />
            <PostLink>{title}</PostLink>
          </div>
        </EachPostLi>
      </EachPostHover>
    </div>
  );
};

export default EachPost;
