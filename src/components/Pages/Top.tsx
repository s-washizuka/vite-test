import React from "react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <>
      <div>これはTopページなんじゃもんじゃ</div>
      <div>
        ほいからこれは<Link to="https://yahoo.co.jp">リンクなんじゃ</Link>
      </div>
    </>
  );
}

export default Top;
