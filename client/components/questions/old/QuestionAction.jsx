import React, { useState } from 'react';

function QuestionAction() {
  const [question, setQuestion] = useState('');

  // Use to add question.
  const onChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    setQuestion(value);
  };

  // To submit question.
  // Need to be a form submit?
  const addQuestion = (event) => {
    event.preventDefault();
    alert('ADD your question here!');
  };

  // Load more questions
  // Will need to lift state to Questions Component.
  const getQuestions = (event) => {
    event.preventDefault();
    console.log('LOAD MORE QUESTIONS');
  };


  return (
    <div  className="question-list">
      <h3>Actions</h3>
      <button onClick={addQuestion}>ADD QUESTION</button>
      <button onClick={getQuestions}>LOAD MORE</button>
    </div>
  );

}

export default QuestionAction;