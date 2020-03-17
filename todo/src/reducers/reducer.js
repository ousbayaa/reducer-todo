export const initialState = [
      {item: 'Understand reducers',
      completed: false,
      id: 1234}
    ]
  
  
  export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
            case "COMPLETED_TODO":
                return state.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    } else {
                        return item;
                    }
                })
                case "CLEAR_COMPLETED_TODO": 
                return state.filter((item) => !item.completed)

                default:
                    return state
    }
}