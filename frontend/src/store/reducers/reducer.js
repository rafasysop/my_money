const INITIAL_STATE = {
  teste: 1,
  credit: 50,
  debit: 30,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CREDIT':
      return { ...state, credit: action.payload }
    case 'DEBIT':
      return { ...state, credit: action.payload }
    default:
      return state
  }
}


export default reducer;