import React from 'react';

function QuizForm(props) {

  const [userInput, setUserInput] = props.userInput;

  const handleChange = (e) => {
    setUserInput(parseInt(e.target.value));
  };

  return (
    <>
      <form onSubmit={props.onSubmit} className="quiz-form">
        <input className="quiz-input"
               ref={props.inputEl}
               type="number"
               placeholder="Answer Here"
               value={userInput}
               onChange={handleChange}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default QuizForm;