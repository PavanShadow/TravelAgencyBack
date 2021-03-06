var { Destination } = require('../models/destination.model')

exports.create = (req, res) => {

    const destination = new Destination({
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        activities: req.body.activities
    });


    destination.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Destination."
            });
        });
};

exports.findAll = (req, res) => {
    Destination.find()
        .then(destinations => {
            res.send(destinations);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving destinations."
            });
        });
};

exports.findOne = (req, res) => {
    Destination.findById(req.params.destinationId)
        .then(destination => {
            if (!destination) {
                return res.status(404).send({
                    message: "Destination not found with id " + req.params.destinationId
                });
            }
            res.send(destination);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Destination not found with id " + req.params.destinationId
                });
            }
            return res.status(500).send({
                message: "Error retrieving destination with id " + req.params.destinationId
            });
        });
};


exports.update = (req, res) => {

    Destination.findByIdAndUpdate(req.params.destinationId, {
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        activities: req.body.activities
    }, { new: true })
        .then(destination => {
            if (!destination) {
                return res.status(404).send({
                    message: "Destination not found with id " + req.params.destinationId
                });
            }
            res.send(destination);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Destination not found with id " + req.params.destinationId
                });
            }
            return res.status(500).send({
                message: "Error updating destination with id " + req.params.destinationId
            });
        });
};

exports.delete = (req, res) => {
    Destination.findByIdAndRemove(req.params.destinationId)
        .then(destination => {
            if (!destination) {
                return res.status(404).send({
                    message: "Destination not found with id " + req.params.destinationId
                });
            }
            res.send({ message: "Destination deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Destination not found with id " + req.params.destinationId
                });
            }
            return res.status(500).send({
                message: "Could not delete desination with id " + req.params.destinationId
            });
        });
};