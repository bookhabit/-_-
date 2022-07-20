import React from "react";
import { EachPostLi, PostRepl, PostLink } from "./styledComponent";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EachPost = ({ title, replCount }) => {
  return (
    <div>
      <EachPostLi>
        <div>
          <FontAwesomeIcon icon={faLocationPin} />
          <PostLink>{title}</PostLink>
        </div>
        <PostRepl>{replCount}</PostRepl>
      </EachPostLi>
    </div>
  );
};

export default EachPost;
