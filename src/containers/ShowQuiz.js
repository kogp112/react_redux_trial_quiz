import React from 'react'
import { connect } from 'react-redux'
import { randomQuiz } from '../actions'

class ShowQuiz extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(randomQuiz())
	}
	render() {
		const { quiz } = this.props
		if (quiz.length > 0) {
			return (
				<div>
					{quiz[0].quiz.quiz}
				</div>
			)
		} else {
			return null
		}
	}
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz
  }
}

export default connect(mapStateToProps)(ShowQuiz)