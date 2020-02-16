const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: 'String', required: true },
    image: { type: 'String', required: true },
    title: { type: 'String', required: true },
    author: { type: 'String', required: true },
    content: { type: 'String', required: true },
    oldPrice: { type: 'String', required: false },
    price:  { type: 'String', required: true },
    feature: { type: 'String', required: false },
});

module.exports = mongoose.model('Product', Product);
