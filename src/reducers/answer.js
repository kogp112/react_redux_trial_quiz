const answer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_ANSWER':
      return [
        ...state,
        {
          input: action.answer
        }
      ]
    default:
      return state
  }
}

export default answer