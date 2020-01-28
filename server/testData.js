const Product = require('./models/product.model');

const loadTestData = async () => {

    const data = [
        {
            id: 'id1',
            title: 'product 1',
            content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
            price: '12.00',
        },
        {
            id: 'id2',
            title: 'product 2',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '13.00',
        },
        {
            id: 'id3',
            title: 'product 3',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
        },
        {
            id: 'id4',
            title: 'product 4',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '15.00',
        },
        {
            id: 'id5',
            title: 'product 5',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '16.00',
        },
        {
            id: 'id6',
            title: 'product 6',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '17.00',
        },
        {
            id: 'id7',
            title: 'product 7',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '12.00',
        },
        {
            id: 'id8',
            title: 'product 8',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '12.00',
        },
        {
            id: 'id9',
            title: 'product 9',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
        }
    ];

    try {
        let counter = await Product.countDocuments();
        if(counter === 0) {
            console.log('No posts. Loading data...');
            await Product.create(data);
            console.log('Test data has been successfully loaded');
        }
    } catch (err) {
        console.log('Couldn\'t load test data', err);
    }

};

module.exports = loadTestData;