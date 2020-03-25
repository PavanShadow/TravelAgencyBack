const mongoose = require('mongoose');


var Destination = mongoose.model('Destination', {
    city: {type: String},
    country: {type: String},
    description: {type: String},
    imageUrl: {type: String},
    activities: [
        {
            name: {type: String},
            type: {type: String},
            rating: {type: Number},
            price: {type: Number},

        }
    ],
    timestamps: {type: Date, default: Date.now}

});

module.exports = { Destination };
