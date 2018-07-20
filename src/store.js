import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootRecucer from './RootReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootRecucer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;
