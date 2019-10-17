import React from "react";

import User from "../../components/User";

const IndexPage = () => {
  return (
    <div>
      <h1>The Auth Index Page</h1>
      <User name="Alex" age={28} />
    </div>
  );
};

export default IndexPage;
