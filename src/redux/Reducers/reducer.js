const initialState = {
    todos: [],
    // users: [],
    // activeuser: []
    
}
export function manipulation(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case 'REMOVE_TODO':
            const deleted = state.todos.filter((item) => item.id !== action.payload)
            // console.log(deleted);
            return {
                ...state, todos: deleted
            }

        case 'UPDATE_TODO':
            const updated = state.todos.map(item => {
                if (item.id === action.payload.id) {
                    console.log(item);
                    return {
                        ...item,
                        todo: action.payload.data
                    }
                }
                return item;

            })
            return {
                ...state,
                todos: updated

            }


        case 'COMPLETE_TODO':
            const completed = state.todos.map(item => {
                if (item.id === action.payload.id) {
                    // console.log(item);
                    return {
                        ...item,
                        completed: true
                    }

                }
                return item
            });
            return {
                ...state,
                todos: completed
            }
        // case "SIGNIN":
        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         activeuser:  action.payload
        //     }

        // case "SIGNUP":
        //     return {
        //         ...state,
        //         users: [...state.users, action.payload]
        //     }
        // case "SIGNOUT":
        //     return {
        //         ...state, activeuser: null
        //     }

        default:
            return state



    }
}