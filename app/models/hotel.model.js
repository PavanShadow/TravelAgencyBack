const mongoose = require('mongoose');


var Hotel = mongoose.model('Hotel', {
    name: { type: String },
    address: { type: String },
    price: { type: Number },
    imageUrl: { type: String },
    facilities: [
        {
            no_of_beds: {type: Number},
            free_wifi: {type: Boolean},
            breakfast_availability: {type: Boolean},
            bar_availability: {type: Boolean},
            pool_availability: {type: Boolean},

        }
    ],
    timestamps: { type: Date, default: Date.now }

});

module.exports = { Hotel };
