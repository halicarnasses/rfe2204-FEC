import React, { useState } from 'react';

function Answer ({answer, helpfulHandler}) {
  console.log(answer);
  return (
    <div>
      <h6>Answer</h6>
      <p className="answer-body">{answer.body}</p>
      <div>
        <p>
          by {answer.answerer_name}, {answer.date} | Helpful?
          <a
            href=""
            onClick={helpfulHandler}
            name="helpful-answer"
            className="onclick">Yes
          </a>
            {answer.helpfulness}
        </p>
      </div>
    </div>
  )

}


export default Answer;