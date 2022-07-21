import React from "react";
import { EachPostLi, PostRepl, PostLink } from "./styledComponent";
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
      <EachPostLi>
        <div>
          <FontAwesomeIcon onClick={goPost} icon={faLocationPin} />
          <PostLink>{title}</PostLink>
        </div>
      </EachPostLi>
    </div>
  );
};

export default EachPost;
