const mongoose = require('mongoose');

var Restaurant = mongoose.model('Restaurant', {
    name: { type: String },
    location: { type: String },
    foodType: { type: String },
    menus: [
        {
            breakfast: [
                {
                    items: [
                        {
                            name: { type: String },
                            price: { type: Number },
                            teaOrCoffe: { type: Boolean }
                        }
                    ]
                }
            ]
        },
        {
            lunch: [
                {
                    items: [
                        {
                            name: { type: String },
                            price: { type: Number },
                            juice: { type: Boolean }
                        }
                    ]
                }
            ]
        },
        {
            dinner: [
                {
                    items: [
                        {
                            name: { type: String },
                            price: { type: Number },
                            liquor: { type: Boolean }
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = { Restaurant };