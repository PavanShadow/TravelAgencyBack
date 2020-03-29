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
                    items: [
                        {
                            name: { type: String },
                            price: { type: Number },
                            
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
                            
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = { Restaurant };