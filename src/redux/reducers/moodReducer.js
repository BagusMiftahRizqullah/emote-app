const initialState = {
    mood:[],
    type_cart: 1,

};

const moodReducer = (state = initialState, action) => {
    console.log('actionsss',action);
    switch (action.type) {
        case 'ADD_MOOD':
            console.log('add mood', action.payload);
            return {
                ...state,
                mood: [...state.mood, action.payload],
            };
        case 'SET_TYPE_CART':
            return {
                ...state,
                type_cart: action.payload,
            };
        default:
            return state;
    }
};
export default moodReducer;
