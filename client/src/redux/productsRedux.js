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

/* ACTIONS */
// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');
export const CHANGE_QTY = createActionName('CHANGE_QTY');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
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
};

//To jest tak jakby baza danych
const mockedProducts = [
    { id: 'id1', title: 'product 1', content: 'content', price: '12.00' },
    { id: 'id2', title: 'product 2', content: 'content', price: '13.00'},
    { id: 'id3', title: 'product 3', content: 'content', price: '14.00'},
    { id: 'id4', title: 'product 4', content: 'content', price: '15.00'},
    { id: 'id5', title: 'product 5', content: 'content', price: '16.00'},
    { id: 'id6', title: 'product 6', content: 'content', price: '17.00'},
    { id: 'id7', title: 'product 7', content: 'content', price: '12.00'},
    { id: 'id8', title: 'product 8', content: 'content', price: '12.00'},
    { id: 'id9', title: 'product 9', content: 'content', price: '14.00'},
];

/* THUNKS */
export const loadProductsByPageRequest = () => {
    return async dispatch => {
        dispatch(loadProducts(mockedProducts));
    };
};

export const loadSingleProductRequest = id => {
    return async dispatch => {
        const product = mockedProducts.filter(singleProduct => singleProduct.id === id);

        dispatch(loadSingleProduct(product[0]));
    };
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return { ...statePart, data: action.payload };
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
