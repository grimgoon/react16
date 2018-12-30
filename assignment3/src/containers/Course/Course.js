import React, { Component } from 'react';
import { withRouter } from "react-router";

class Course extends Component {


    componentDidMount() {
        this.loadData();
        
    }

    componentDidUpdate() {
        console.log(this.props);
        this.loadData();
    }

    loadData = () => {

    }

    render () {
        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);