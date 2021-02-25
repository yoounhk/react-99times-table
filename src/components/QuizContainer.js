import React, {useEffect, useRef, useState} from 'react';
import QuizForm from "./QuizForm";
import QuizHistory from "./QuizHistory";
import QuizInfo from "./QuizInfo";
import QuizTable from "./QuizTable";

function QuizContainer() {

  const buildQuizList = (quizRange) => {
    let list = [];
    let {minLeft, maxLeft, minRight, maxRight} = quizRange;
    for (let i = minLeft; i <= maxLeft; i++) {
      for (let j = minRight; j <= maxRight; j++) {
        list.push({
          left: i,
          right: j
        })
      }
    }
    return (list);
  };

  const shuffle = length => {
    let array = [...Array(length).keys()];
    for (let i = array.length - 1; i > 0; i--) { // Durstenfeld shuffle
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const [quizRange, setQuizRange] = useState({
    minLeft: 2,
    maxLeft: 9,
    minRight: 1,
    maxRight: 9
  });

  const [quizList, setQuizList] = useState(buildQuizList(quizRange));
  const [userInput, setUserInput] = useState();
  const [history, setHistory] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSequence, setQuizSequence] = useState(shuffle(quizList.length));

  const inputEl = useRef(null);
  const tableEl = useRef(null);

  useEffect(() => {
    setQuizList(buildQuizList(quizRange));
  }, [quizRange]);

  const checkAnswer = () => {
    const {left, right} = quizList[quizSequence[quizIndex]];
    const isRight = left * right === userInput;
    setHistory(prevState => [...prevState, {
        quiz: quizList[quizSequence[quizIndex]],
        userAnswer: userInput,
        rightAnswer: left * right,
        isRight: isRight
      }]
    );
  }

  const updateTable = () => {
    const currentQuiz = quizList[quizSequence[quizIndex]];
    const targetRow = currentQuiz.left - quizRange.minLeft + 1; // TODO
    const targetCol = currentQuiz.right - quizRange.minRight + 1; // TODO
    tableEl.current.rows[targetRow].cells[targetCol].innerHTML = currentQuiz.left * currentQuiz.right === userInput ? 'O' : 'X';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    updateTable();
    setQuizIndex(prevState => prevState + 1);
    setUserInput('');
    inputEl.current.focus();
  }

  return (
    <>
      <QuizTable quizRange={quizRange}
                 history={history}
                 tableEl={tableEl}/>

      <QuizInfo quizRange={quizRange}
                quizList={quizList}
                quizIndex={quizIndex}
                quizSequnce={quizSequence}/>

      <QuizForm userInput={[userInput, setUserInput]}
                onSubmit={handleSubmit}
                inputEl={inputEl}/>

      <QuizHistory history={history}/>
    </>
  );
}

export default QuizContainer;