import axios from 'axios';
import { API_URL } from '../config';

/* CONSTS */
export const PRODUCTS_PER_PAGE = 10;

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const isLoading = (state) => true === getRequest(state).pending && false !== getRequest(state).error;
export const isError = (state) => true === getRequest(state).error;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getCartProducts = ({ products }) => products.cartProducts;
export const getTotalPrice = ({ products }) => {
    return products.cartProducts
        .reduce((sum, product) => {
            return sum + (product.quantity * product.price);
        }, 0)
};
export const getPages = ({ products }) => Math.ceil(products.amount / PRODUCTS_PER_PAGE);
export const getSummary = ( { products }) => products.summary;
export const getSortBy = ({ products }) => products.sortBy;
export const getDirection = ({ products }) => products.direction;
export const getSearch = ({ products }) => products.search;

/* ACTIONS */
// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const START_REQUEST = createActionName('START_REQUEST');
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');
export const CHANGE_QTY = createActionName('CHANGE_QTY');
export const CHECKOUT = createActionName('CHECKOUT');
export const SORT = createActionName('SORT');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

export const startRequest = () => ({ type: START_REQUEST });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const addProductToCart = payload => ({ payload, type: ADD_PRODUCT});
export const removeCartProduct =  payload => ({ payload, type: REMOVE_CART_PRODUCT });
export const changeQty = (id, qty) => {
    let payload = {
        id: id,
        qty: qty
    };

    return ({ payload, type: CHANGE_QTY });
};
export const checkout = payload => ({payload, type: CHECKOUT});
export const sort = payload => ({ payload, type: SORT });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

/* INITIAL STATE */
const initialState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null,
    },
    singleProduct: {},
    cartProducts: [],
    amount: 0,
    presentPage: 1,
    sortBy: 'title',
    direction: 'asc',
    summary: {
        items: [],
        sum: 0,
    },
    search: '',
};

/* THUNKS */
export const loadProductsByPageRequest = (page, sortBy = 'title', direction = 'asc', search = '') => {
    return async dispatch => {

        dispatch(startRequest());
        try {
            const startAt = (page - 1) * PRODUCTS_PER_PAGE;

            let url = `${API_URL}/products/range/${startAt}/${PRODUCTS_PER_PAGE}?sortBy=${sortBy}&direction=${direction}`;

            if (search) {
                url = url + `&search=${search}`
            }

            let res = await axios.get(url);

            const payload = {
                products: res.data.products,
                amount: res.data.amount,
                presentPage: page,
                sortBy,
                direction,
                search,
            };

            dispatch(loadProductsByPage(payload));
            dispatch(endRequest());
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

export const loadSingleProductRequest = id => {
    return async dispatch => {

        dispatch(startRequest());
        try {
            axios.get(`${API_URL}/products/${id}`).then(res => {

                dispatch(loadSingleProduct(res.data));
                dispatch(endRequest());
            })
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

export const checkoutRequest = (cartProducts, couponCode) => {
    return async dispatch => {

        dispatch(startRequest());
        try {
            const data = {cartProducts, couponCode};

            axios.post(`${API_URL}/checkout`, data).then(res => {

                dispatch(checkout(res.data));
                dispatch(endRequest());
            })
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {

        case START_REQUEST:
            return { ...statePart, request: { pending: true, error: null, success: null } };

        case LOAD_SINGLE_PRODUCT:
            return { ...statePart, singleProduct: action.payload };

        case ADD_PRODUCT:
            const productIdToAdd = action.payload;

            const hasAlreadyCartProduct = statePart.cartProducts.find(
                (cartProduct) => {
                    return cartProduct.id === productIdToAdd
                }
            );

            if (hasAlreadyCartProduct) {
                const cartProducts = statePart.cartProducts.map(
                    (cartProduct) => {
                        if (cartProduct.id === productIdToAdd) {
                            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
                        }

                        return cartProduct;
                    }
                );

                return { ...statePart, cartProducts };
            }

            const product = statePart.data.find(
                (product) => {
                    return product.id === productIdToAdd
                }
            );

            const cartProduct = { ...product, quantity: 1 };

            return {
                ...statePart,
                cartProducts: [...statePart.cartProducts, cartProduct],
            };

        case REMOVE_CART_PRODUCT:
            const productIdToRemove = action.payload;

            return {
                ...statePart,
                cartProducts: statePart.cartProducts.filter((cartProduct) => {
                    return cartProduct.id !== productIdToRemove;
                })
            };

        case CHANGE_QTY:
            const { id, qty } = action.payload;

            return {
                ...statePart,
                cartProducts: statePart.cartProducts.map(
                    (product) => {
                        if (product.id !== id) {
                            return product;
                        }

                        return { ...product, quantity: qty };
                    }
                )
            };

        case CHECKOUT:
            return {
                ...statePart,
                summary: action.payload
            };

        case END_REQUEST:
            return { ...statePart, request: { pending: false, error: null, success: true } };

        case ERROR_REQUEST:
            return { ...statePart, request: { pending: false, error: action.error, success: false } };

        case RESET_REQUEST:
            return { ...statePart, request: { pending: false, error: null, success: null } };

        case LOAD_PRODUCTS:
            return {
                ...statePart,
                presentPage: action.payload.presentPage,
                amount: action.payload.amount,
                data: [...action.payload.products],
                sortBy: action.payload.sortBy,
                direction: action.payload.direction,
                search: action.payload.search,
            };

        default:
            return statePart;
    }
};
