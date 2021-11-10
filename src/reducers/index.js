import { combineReducers } from 'redux';
import { publicReducer } from './publicReducer';
import { vaccineReducer } from './vacPublicReducer';
import { globalReducer } from './globalReducer';

const rootReducer = combineReducers({
    vaccine: vaccineReducer,
    public: publicReducer,
    globalData: globalReducer
});

export default rootReducer;