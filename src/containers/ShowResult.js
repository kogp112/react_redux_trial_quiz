import React from 'react'
import { connect } from 'react-redux'

const Result = (answers) => {
  if (answers.answer.length > 0) {
    let input_answer = answers.answer[0].input
    let correct_answer = answers.quiz[0].quiz.answer

    if (input_answer === correct_answer) {
      return ( <div> ○ </div> )
    } else {
      return ( <div> × </div> )
    }
  } else {
    return ( <div>not answer</div> )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps
)(Result)