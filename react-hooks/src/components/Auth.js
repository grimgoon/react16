import React,{useContext}  from 'react';
import AuthContext from "../auth-context";

<<<<<<< HEAD
const Auth = props => (
    <button>Log in!</button>
    
);
=======
const Auth = props => {
    const auth = useContext(AuthContext);
   return <button onClick={auth.login}>Log in!</button>
};
>>>>>>> aa4eb65643edb95b2d883b97d6534ee7bfe818bd

export default Auth;