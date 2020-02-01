const Product = require('./models/product.model');

const loadTestData = async () => {

    const data = [
        {
            id: 'id1',
            title: 'producta',
            content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
            price: '12.00',
            feature: 'new',
        },
        {
            id: 'id2',
            title: 'productb',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '13.00',
            feature: 'best',
        },
        {
            id: 'id3',
            title: 'productc',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            feature: 'promotion',
        },
        {
            id: 'id4',
            title: 'productd',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '15.00',
            feature: '',
        },
        {
            id: 'id5',
            title: 'producte',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '16.00',
            feature: '',
        },
        {
            id: 'id6',
            title: 'productf',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '17.00',
            feature: '',
        },
        {
            id: 'id7',
            title: 'productg',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '12.00',
            feature: '',
        },
        {
            id: 'id8',
            title: 'producth',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '12.00',
            feature: '',
        },
        {
            id: 'id9',
            title: 'producti',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            feature: '',
        },
        {
            id: 'id10',
            title: 'productj',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            feature: '',
        },
        {
            id: 'id11',
            title: 'productk',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            feature: '',
        },
        {
            id: 'id12',
            title: 'productm',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            price: '14.00',
            feature: '',
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
