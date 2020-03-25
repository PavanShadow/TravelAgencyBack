const mongoose = require('mongoose');


var Hotel = mongoose.model('Hotel', {
    name: {type: String},
    address: {type: String},
    price: {type: Number},
    imageUrl: {type: String},
    timestamps: {type: Date, default: Date.now}

});

module.exports = { Hotel };
