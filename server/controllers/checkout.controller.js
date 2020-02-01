const Product = require('../models/product.model');

// checkout
exports.checkout = async (req, res) => {
    let sum = 0;
    let items = [];

    const { cartProducts, couponCode } = req.body;

    const products = await Product.find()
        .where('id')
        .in(cartProducts.map(cartProduct => cartProduct.id))
        .exec();

    products.forEach(product => {
        const cartProduct = cartProducts.find(
            (cartProduct) => cartProduct.id === product.id
        );

        sum = sum + (product.price * cartProduct.quantity);

        items.push({
            id: product.id,
            title: product.title,
            quantity: cartProduct.quantity,
            price: product.price,
        })
    });

    if (couponCode) {
        if (couponCode === 'PROMO10') {
            const discount = sum * 0.1;

            items.push({
                id: 'promo10',
                title: '-10% discount',
                quantity: 1,
                price: discount,
            });
            sum = sum - discount;
        }
        else {
            items.push({
                id: 'badCode',
                title: 'Invalid coupon code',
                quantity: 0,
                price: 0,
            });
        }
    }

    res.status(200).json({
        items: items,
        sum: sum
    })
};
