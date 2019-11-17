import React from "react";
import Link from "next/Link";
import Router from "next/router";

const IndexPage = () => {
  return (
    <div>
      <h1>The Main Page</h1>
      <Link href="/">
        <a>Meep</a>
      </Link>
      <button onClick={() => Router.push("/auth")}> Button</button>
    </div>
  );
};

export default IndexPage;
