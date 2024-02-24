const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://rajat_veggi1304:' + process.env.MONGO_ATLAS_PW + '@veggies.znzgp.mongodb.net/calup?retryWrites=true&w=majority';

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
