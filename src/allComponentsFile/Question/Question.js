import React from 'react';

const Question = (props) => {
    const { question, answer } = props;

    return (
        <div>
            <h1>Question: { question } </h1>
            <p>Answer: { answer } </p>
        </div>
    );
};

export default Question;