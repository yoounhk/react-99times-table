import React from 'react';

function QuizInfo(props) {
  const quizRange = props.quizRange;
  const quizList = props.quizList;
  const quizIndex = props.quizIndex;
  const quizSequence = props.quizSequnce;

  return (
    <>
      <div>출제 범위: {`${quizRange.minLeft}~${quizRange.maxLeft}단의`
      +  `${quizRange.minRight}~${quizRange.maxRight}배수`}</div>
      <div>{`${quizList[quizSequence[quizIndex]].left} * ${quizList[quizSequence[quizIndex]].right} = ?`}</div>
    </>
  );
}

export default QuizInfo;
