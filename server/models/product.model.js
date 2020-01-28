const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: 'String', required: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    price:  {type: 'String', required: true },
});

module.exports = mongoose.model('Product', Product);
