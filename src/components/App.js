import React from 'react'
import Quiz from '../containers/ShowQuiz' 
import Result from '../containers/ShowResult'
import InputAnswer from '../containers/InputAnswer' 

const App = () => (
	<div>
		<Quiz />
		<InputAnswer />
		<Result />
	</div>
)

export default App