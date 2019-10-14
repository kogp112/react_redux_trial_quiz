const quizlist = [
	{id:1,  quiz: 'bully',        answer: 'いじめる'},
	{id:2,  quiz: 'humiliate',    answer: '恥をかかせる'},
	{id:3,  quiz: 'condescend',   answer: 'へりくだる'},
	{id:4,  quiz: 'lame',         answer: '足が不自由な'},
	{id:5,  quiz: 'accommodate',  answer: '配慮する'},
	{id:6,  quiz: 'anguish',      answer: '苦悩'},
	{id:7,  quiz: 'appreciation', answer: '理解'},
	{id:8,  quiz: 'perceive',     answer: '気づく'},
	{id:9,  quiz: 'agonize',      answer: 'ひどく苦しむ'},
	{id:10, quiz: 'yield',        answer: '産み出す'}
]

const quiz = (state = [], action) => {
	let quizRow = Math.floor(Math.random() * quizlist.length)
	switch (action.type) {
		case 'SHOW_QUIZ':
				return [
					...state,
					{
						quiz: quizlist[quizRow]
					}
				]
		default:
			return state
	}
}

export default quiz