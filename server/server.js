const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');
const mongoose = require('mongoose');
const path = require('path');
const loadTestData = require('./testData');

const app = express();

// import routes
const productRoutes = require('./routes/product.routes');
const checkoutRoutes = require('./routes/checkout.routes');

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/products', productRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use(helmet());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

// connects our back end code with the database
mongoose.connect(config.DB, {useNewUrlParser: true,});

let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});

db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function() {
    console.log('Server is running on Port:', config.PORT)
});
