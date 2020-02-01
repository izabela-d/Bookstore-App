const Product = require('../models/product.model');

// checkout
exports.checkout = async (req, res) => {
    let sum = 0;
    let items = [];

    const cartProducts = req.body;

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

    res.status(200).json({
        items: items,
        sum: sum
    })
};
