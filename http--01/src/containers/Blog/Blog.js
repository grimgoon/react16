import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        auth : false,
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
                    {this.state.auth ? <Route path="/new-post" exact component={NewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    {/* <Route path="/" component={Posts}/> */}
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;