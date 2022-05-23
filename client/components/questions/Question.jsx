import React, { useState } from 'react';

function Question({props}) {
  console.log('q', props);
  const {asker_name, question_body, question_date, question_helpfulness, question_id, reported} = props;
  const [question, setQuestion] = useState(question_body);

  return (
    <div  className="question-item">
      <h4>{question}</h4>
    </div>
  );

}


export default Question;