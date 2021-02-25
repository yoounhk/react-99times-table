import React, {useEffect, useRef} from 'react';
import './QuizTable.css';

function QuizTable(props) {

  const quizRange = props.quizRange;
  const history = props.history;

  const leftLength = quizRange.maxLeft - quizRange.minLeft + 1;
  const rightLength = quizRange.maxRight - quizRange.minRight + 1;

  const renderCell = [...Array(rightLength).keys()].map((e) => {
    return (<td></td>);
  });

  const renderRow = [...Array(leftLength).keys()].map((e) => {
      return (<tr>
        <td>{e+quizRange.minLeft}</td>
        {renderCell}
      </tr>)
    });

  return (
    <>
    <table ref={props.tableEl}>
      <tr>
        <th>X</th>
        {[...Array(rightLength).keys()].map((e) => {
          return (<th>{e+quizRange.minRight}</th>)
        })}
      </tr>
      {renderRow}
    </table>
    </>
  );
}

export default QuizTable;