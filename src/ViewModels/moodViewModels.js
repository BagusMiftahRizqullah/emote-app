import { useSelector, useDispatch } from 'react-redux';
import { addMood, setCart } from '../redux/actions/moodActions';

 const useMood = () => {
    const moodReducer = useSelector(state => state.moodReducer);
    const dispatch = useDispatch();
    const addMoods = (payload) => {
        console.log('add mood', payload);
        dispatch(addMood(payload));
    };

    const setupCart = (payload) => {
        console.log('setup  cart', payload);
        dispatch(setCart(payload));
    };

    return {
        moodReducer,
        addMoods,
        setupCart,
    };

};

export default useMood;
