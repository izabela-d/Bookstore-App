import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getCartProducts = ({ products }) => products.cartProducts;
export const getTotalPrice = ({ products }) => {
    return products.cartProducts
        .reduce((sum, product) => {
            return sum + (product.quantity * product.price);
        }, 0)
};
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);

/* ACTIONS */
// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');
export const CHANGE_QTY = createActionName('CHANGE_QTY');

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

/* INITIAL STATE */
const initialState = {
    data: [],
    singleProduct: {},
    cartProducts: [
        { id: 'id7', title: 'product 7', quantity: 1, content: 'content 7', price: '12.00' },
        { id: 'id8', title: 'product 8', quantity: 2, content: 'content 8', price: '12.00'},
        { id: 'id9', title: 'product 9', quantity: 10, content: 'content 9', price: '14.00'}
    ],
    amount: 0,
    productsPerPage: 10,
    presentPage: 1,
};

/* THUNKS */
export const loadProductsByPageRequest = (page, productsPerPage) => {
    return async dispatch => {

        const startAt = (page - 1) * productsPerPage;

        let res = await axios.get(`${API_URL}/products/range/${startAt}/${productsPerPage}`);

        const payload = {
            products: res.data.products,
            amount: res.data.amount,
            productsPerPage,
            presentPage: page,
        };

        dispatch(loadProductsByPage(payload));


    };
};

export const loadSingleProductRequest = id => {
    return async dispatch => {
        axios.get(`${API_URL}/products/${id}`).then(res => {

            dispatch(loadSingleProduct(res.data));
        })
    };
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...statePart,
                productsPerPage: action.payload.productsPerPage,
                presentPage: action.payload.presentPage,
                amount: action.payload.amount,
                data: [...action.payload.products],
            };
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
        default:
            return statePart;
    }
};
