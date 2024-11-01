export const addMood = (payload) => {
    return {
        type: 'ADD_MOOD',
        payload: payload,
    };
};

export const setCart = (payload) => {
    return {
        type: 'SET_TYPE_CART',
        payload: payload,
    };
};
