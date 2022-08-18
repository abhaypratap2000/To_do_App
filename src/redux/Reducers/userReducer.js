const initialState = {
    users:[],
    activeusers:[]
}
export function manipulationUsers(state = initialState , action){
    switch(action.type){
        case "SIGNIN":
            // console.log(action.payload);
            return {
                ...state,
                activeusers:  action.payload
            }

        case "SIGNUP":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "SIGNOUT":
            return {
                ...state, activeusers: null
            }
            default:
                return state
    }
}