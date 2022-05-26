import React, { useState } from 'react';

function Answer ({answer, helpfulHandler, reportHandler}) {
  return (
    <div>
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
            {answer.helpfulness} |
          <a
            href=""
            onClick={reportHandler}
            name="report-answer"
            className="onclick">Report
          </a>
        </p>
      </div>
    </div>
  )
}

export default Answer;