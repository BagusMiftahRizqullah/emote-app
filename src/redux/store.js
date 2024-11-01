
import {createStore, combineReducers} from 'redux';
import moodReducer from './reducers/moodReducer';

const rootReducer = combineReducers({
    moodReducer: moodReducer,
    });

const store = createStore(rootReducer);

export default store;
