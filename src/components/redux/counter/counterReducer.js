const initialState = {
    counter : 0,
    price: 127
}

const reducer =(state=initialState , action)=> {
    switch (action.type) {
        case "INCREASE" :
            return {
                ...state,
                counter : state.counter + 1
            }

        case "DICREASE" :
                return {
                    ...state,
                    counter : state.counter - 1
                }
            default :
            return state ;
    }
}

export default reducer;