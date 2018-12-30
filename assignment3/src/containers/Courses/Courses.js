import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import './Courses.css';
import Course from '../Course/Course';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular-TheCompleteGuide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        showCourse : false,
        errorMessage : null
    }

    componentDidMount() {

        console.log(this.props);

        if(this.props.match.path !== this.props.location.pathname) {

            const courses = [
                ...this.state.courses
            ]

            let path = this.props.location.pathname.split("/courses/");
            path = path[1];

            let result = courses.find((course) => {
                return course.title === path;
            });

           if(!result) {
            this.setState({errorMessage : "This course does not seem to exist!"});
           }
           else {
            this.setState({showCourse : result["id"]});
           }

           

        }
    }

    courseClickHandler = (id) => {
        this.setState({showCourse : id});
    }

    render () {
        let content =  this.state.courses.map( course => {
            return <NavLink  to={"/courses/" + course.title}  onClick={() => this.courseClickHandler(course.id)} className="Course" key={course.id}>{course.title}</NavLink>;
        } )

        console.log(this.state.errorMessage);

        let route = this.state.errorMessage ? <h3>{this.state.errorMessage}</h3> : <Route path={this.props.match.url + "/:title"} render={() => <Course id={this.state.showCourse}></Course>}/>;
        
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {content}
                </section>
                {route}
            </div>
        );
    }
}

export default Courses;