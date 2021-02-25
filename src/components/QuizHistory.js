import React from 'react';

function QuizHistory(props) {

  const history = props.history;

  if (history.length >= 1) {
    return (
      <>
        <ol className="history-list">
          {history.map((e, index) => {
            return (<li
              key={index}>
              {`문제${index + 1}. ${e.quiz.left} * ${e.quiz.right}`}
              <br/>{`제출: ${e.userAnswer}`}
              <br/>{`정답: ${e.rightAnswer}`}
              <br/>{`결과: ${e.isRight ? '정답' : '오답'}`}</li>)
          })}
        </ol>
      </>
    );
  } else {
    return (<></>);
  }

}


export default QuizHistory;