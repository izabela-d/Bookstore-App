/* SELECTORS */
export const getProducts = ({ products }) => products;

/* ACTIONS */
// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* INITIAL STATE */
const initialState = [];

/* THUNKS */
export const loadProductsByPageRequest = () => {
    return async dispatch => {
        dispatch(loadProducts([
            { id: 'id1', title: 'product 1', content: 'content', price: '12.00' },
            { id: 'id2', title: 'product 2', content: 'content', price: '13.00'},
            { id: 'id3', title: 'product 3', content: 'content', price: '14.00'},
            { id: 'id4', title: 'product 4', content: 'content', price: '15.00'},
            { id: 'id5', title: 'product 5', content: 'content', price: '16.00'},
            { id: 'id6', title: 'product 6', content: 'content', price: '17.00'},
        ]));
    };
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return [ ...action.payload ];
        default:
            return statePart;
    }
};
