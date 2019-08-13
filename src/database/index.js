const mongoose = require('mongoose'); //defining a mongoose constant

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true }); //connection mongodb database
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

module.exports = mongoose;
