import { createStore, applyMiddleware } from 'redux';
import { default as ReduxThunk } from "redux-thunk";
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState) => {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(ReduxThunk)
    )
}

export default configureStore;