module.exports = {
    PORT: process.env.PORT || 8000,
    DB: (process.env.NODE_ENV === 'production') ? 'mongodb+srv://project-0-vnvca.mongodb.net/bookstoreapp?retryWrites=true&w=majority' : 'mongodb://localhost:27017/FinallyApp',
    MONGO_USER: (process.env.NODE_ENV === 'production') ? process.env.MONGO_USER : '',
    MONGO_PASS: (process.env.NODE_ENV === 'production') ? process.env.MONGO_PASS : ''
};
