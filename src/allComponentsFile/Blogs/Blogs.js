import React from 'react';
import Question from '../Question/Question';
import "./Blog.css";


const Blogs = () =>
{
    const question1 = ' How does React Work?';
    const question2 = "What is the difference between props and state in react.js?";
    const question3 = "What is the another purpose of useEffect hook without fetch data?";

    const answer1 = "React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.";
    const answer2 = "Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.";
    const answer3 = "The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are:  directly updating the DOM, and timers.";

    return (
        <div className='blogs'>
            <div className='blog'><Question question={ question1 } answer={ answer1 }></Question></div>
            <div className='blog'><Question question={ question2 } answer={ answer2 }></Question></div>
            <div className='blog'><Question question={ question3 } answer={ answer3 }></Question></div >

        </div>
    );
};

export default Blogs;