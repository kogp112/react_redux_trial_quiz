export const checkAnswer = (answer) => ({
  type: 'CHECK_ANSWER',
  answer
})

export const showResult = result => ({
  result
})

export const randomQuiz = (quiz) => ({
  type: 'SHOW_QUIZ',
  quiz
}) 