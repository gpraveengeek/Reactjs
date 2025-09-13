// initialState is object type it can 
// hold any type of data 
// ie number, string, array, object etc. 

let initialState = {
    n:108,
    name:"Praveen Gunnala"          
}

function reducer(state=initialState,action){
    // base upon action we will update the state 
    console.log("reducer called with action",action);
    if(action.type=="INCREMENT"){
    return {...state, n: state.n + 1 }; // increment n by 1
    }
    if(action.type=="DECREMENT"){
    return {...state, n: state.n - 1 }; // decrement n by 1
    }
    if(action.type=="DYNAMIC_INCREMENT"){
        return{...state, n: state.n + action.payload}
    }
    return state;
}
export default reducer;