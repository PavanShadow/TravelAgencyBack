const mongoose = require('mongoose');

var Restaurant = mongoose.model('Restaurant', {
    name: { type: String },
    location: { type: String },
    foodType: { type: String },
    imageUrl: { type: String },
    menus: [
        {
            breakfast: [
                {

                    name: { type: String },
                    price: { type: Number },


                }
            ],
            lunch: [
                {

                    name: { type: String },
                    price: { type: Number },


                }
            ],
            dinner: [
                {

                    name: { type: String },
                    price: { type: Number },


                }
            ]
        }


    ]
});

module.exports = { Restaurant };