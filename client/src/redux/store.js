import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './productsRedux';

// combine reducers
const rootReducer = combineReducers({
    products: products,
});

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__)
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(thunk));

// create store
const store = createStore(
    rootReducer,
    composeEnhancer
);

export default store;
