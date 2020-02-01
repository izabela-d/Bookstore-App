const Product = require('../models/product.model');

// get all products
exports.getProducts = async (req, res) => {
    try {
        res.status(200).json(await Product.find());
    } catch(err) {
        res.status(500).json(err);
    }
};

//get single products
exports.getSingleProduct = async (req, res) => {
  try {
      res.status(200).json(await Product.findOne({id: req.params.id}));
  }  catch(err) {
      res.status(500).json(err);
  }
};

// Get products by range
exports.getProductsByRange = async function (req, res) {

    try {
        let { startAt, limit } = req.params;
        const { sortBy, direction, search } = req.query;

        let query = {};
        if (search) {
            query = { title: { $regex: search, $options: 'i' } }
        }

        startAt = parseInt(startAt);
        limit = parseInt(limit);

        const products = await Product.find(query).sort({ [sortBy]: direction}).skip(startAt).limit(limit);
        const amount = await Product.countDocuments();

        res.status(200).json({
            products,
            amount,
        });

    } catch(err) {
        res.status(500).json(err);
    }

};
