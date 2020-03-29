var { Restaurant } = require('../models/restaurant.model');

exports.create = (req, res) => {

    const restaurant = new Restaurant({
        name: req.body.name,
        location: req.body.location,
        foodType: req.body.foodType,
        imageUrl: req.body.imageUrl,
        menus: req.body.menus
    });

    restaurant.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Restaurant."
            });
        });
};

exports.findAll = (req, res) => {
    Restaurant.find()
        .then(restaurants => {
            res.send(restaurants);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving restaurants."
            });
        });
};

exports.findOne = (req, res) => {
    Restaurant.findById(req.params.restaurantId)
        .then(restaurant => {
            if (!restaurant) {
                return res.status(404).send({
                    message: "Restaurant not found with id " + req.params.restaurantId
                });
            }
            res.send(restaurant);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Restaurant not found with id " + req.params.restaurantId
                });
            }
            return res.status(500).send({
                message: "Error retrieving restaurants with id " + req.params.restaurantId
            });
        });
};


exports.update = (req, res) => {

    Restaurant.findByIdAndUpdate(req.params.restaurantId, {
        name: req.body.name,
        location: req.body.location,
        foodType: req.body.foodType,
        imageUrl: req.body.imageUrl,
        menus: req.body.menus
    }, { new: true })
        .then(restaurant => {
            if (!restaurant) {
                return res.status(404).send({
                    message: "Restaurant not found with id " + req.params.restaurantId
                });
            }
            res.send(restaurant);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Restaurant not found with id " + req.params.restaurantId
                });
            }
            return res.status(500).send({
                message: "Error updating restaurant with id " + req.params.restaurantId
            });
        });
};


exports.delete = (req, res) => {
    Restaurant.findByIdAndRemove(req.params.restaurantId)
        .then(restaurant => {
            if (!restaurant) {
                return res.status(404).send({
                    message: "Restaurant not found with id " + req.params.restaurantId
                });
            }
            res.send({ message: "Restaurant deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Restaurant not found with id " + req.params.restaurantId
                });
            }
            return res.status(500).send({
                message: "Could not delete restaurant with id " + req.params.restaurantId
            });
        });
};