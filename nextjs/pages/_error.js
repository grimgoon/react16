import React from "react";
import Link from "next/Link";
import Router from "next/router";

const IndexPage = () => {
  return (
    <div>
      <h1>The Error Page</h1>
      <Link href="/">
        <a> Try Going Back</a>
      </Link>
    </div>
  );
};

export default IndexPage;
