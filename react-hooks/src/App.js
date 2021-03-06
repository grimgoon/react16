import React, { useState } from "react";

import Header from "./components/Header";
import Todo from "./components/Todo";
import Auth from "./components/Auth";
import AuthContext from "./auth-context";

function App(props) {
  const [page, setPage] = useState("auth");
  const [authStatus, setAuthStatus] = useState(false);
  const switchPage = pageName => {
    setPage(pageName);
  };

  const login = () => {
    setAuthStatus(true);
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{status: authStatus, login}}>
        <Header
          onLoadTodos={() => switchPage("todos")}
          onLoadAuth={switchPage.bind(this, "auth")}
        />
        <hr />
        {page === "auth" ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
