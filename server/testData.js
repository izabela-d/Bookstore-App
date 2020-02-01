const Product = require('./models/product.model');

const loadTestData = async () => {
    const data = [
        {
            id: 'id1',
            image: 'book1.jpg',
            title: 'producta',
            content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
            price: '12.00',
            oldPrice: null,
            feature: 'new',
        },
        {
            id: 'id2',
            image: 'book1.jpg',
            title: 'productb',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '13.00',
            oldPrice: null,
            feature: 'best',
        },
        {
            id: 'id3',
            image: 'book1.jpg',
            title: 'productc',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            oldPrice: '16.00',
            feature: 'promotion',
        },
        {
            id: 'id4',
            image: 'book1.jpg',
            title: 'productd',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '15.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id5',
            image: 'book1.jpg',
            title: 'producte',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '16.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id6',
            image: 'book1.jpg',
            title: 'productf',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '17.00',
            oldPrice: '19.00',
            feature: 'promotion',
        },
        {
            id: 'id7',
            image: 'book1.jpg',
            title: 'productg',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '12.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id8',
            image: 'book1.jpg',
            title: 'producth',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '12.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id9',
            image: 'book1.jpg',
            title: 'producti',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id10',
            image: 'book1.jpg',
            title: 'productj',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id11',
            image: 'book1.jpg',
            title: 'productk',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            oldPrice: null,
            feature: null,
        },
        {
            id: 'id12',
            image: 'book1.jpg',
            title: 'productm',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            oldPrice: null,
            feature: null,
        }
    ];

    try {
        let counter = await Product.countDocuments();

        if(counter > 0) {
            await Product.collection.drop();
            console.log('No posts. Loading data...');
        }

        await Product.create(data);
        console.log('Test data has been successfully loaded');
    } catch (err) {
        console.log('Couldn\'t load test data', err);
    }
};

module.exports = loadTestData;
