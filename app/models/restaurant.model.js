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
                    imgUrl: { type: String }


                }
            ],
            lunch: [
                {

                    name: { type: String },
                    price: { type: Number },
                    imgUrl: { type: String }

                }
            ],
            dinner: [
                {

                    name: { type: String },
                    price: { type: Number },
                    imgUrl: { type: String }

                }
            ]
        }


    ]
});

module.exports = { Restaurant };