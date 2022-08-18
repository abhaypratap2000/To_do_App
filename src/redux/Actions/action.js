export const addtodos = (data)=>{
    return(dispatch)=>{
        dispatch({type: "ADD_TODO" , payload: data});
    }
}
export const deletetodo =(id) =>{
    return(dispatch)=>{
        dispatch({type :"REMOVE_TODO" , payload:id});
    }
}
export const updatetodo = (id,data)=>{
    return(dispatch)=>{
        dispatch({type:"UPDATE_TODO" , payload:{id , data}})
    }
}
export const completed = (id)=>{
    return(dispatch)=>{
        dispatch({type:"COMPLETE_TODO" , payload:{id}})
    }
}
export const signup = (data)=>{
    return(dispatch)=>{
        dispatch({type : "SIGNUP" , payload:data});
    }
}
export const signout =()=>{
    return(dispatch)=>{
        dispatch({type :"SIGNOUT"})
    }
}
export const signin =(data)=>{
    console.log(data);
    return(dispatch)=>{
        dispatch({type :"SIGNIN" , payload:data})
    }
}
