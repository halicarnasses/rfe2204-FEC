import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';

function Answer ({answer, helpfulHandler, reportHandler}) {
  return (
    <div className="answer">
      <p className="answer-body">{answer.body}</p>

      <div>
        <p>
          by {answer.answerer_name}, {format(parseISO(answer.date), 'MMMM, dd, yyyy')} | Helpful?
          <a
            href=""
            value={answer.id}
            onClick={helpfulHandler}
            name="helpful-answer"
            className="onclick">Yes</a>
          {answer.helpfulness} |
          <a
            href=""
            value={answer.id}
            onClick={reportHandler}
            name="report-answer"
            className="onclick">Report</a>
        </p>
      </div>

    </div>
  )
}

export default Answer;