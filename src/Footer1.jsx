import React from "react";
import { Footer, FooterBig, FooterSmall } from "./styledComponent";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer1 = () => {
  return (
    <>
      <Footer>
        <FontAwesomeIcon icon={faReact} />
        <FooterBig>for react study</FooterBig>
        <FooterSmall>2022.by hyun jin</FooterSmall>
      </Footer>
    </>
  );
};

export default React.memo(Footer1);
