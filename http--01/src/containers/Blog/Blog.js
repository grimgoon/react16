import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
 
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost'); 
});

class Blog extends Component {

    state = {
        auth : true,
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeStyle={{color: '#fa923f', textDecoration: 'underline'}} activeClassName="my-active" exact to="/posts/">Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    <Route path="/" exact component={Posts}/>
                    <Route render={() => <h1>404 not found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;