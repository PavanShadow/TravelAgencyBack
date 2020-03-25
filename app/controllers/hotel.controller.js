var {Hotel} = require('../models/hotel.model')

exports.create = (req, res) => {
     
    const hotel = new Hotel({
        name: req.body.name, 
        address: req.body.address,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
    });

    
    hotel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findAll = (req, res) => {
    Hotel.find()
    .then(hotels => {
        res.send(hotels);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    Hotel.findById(req.params.hotelId)
    .then(hotel => {
        if(!hotel) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.hotelId
            });            
        }
        res.send(hotel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.hotelId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.hotelId
        });
    });
};


exports.update = (req, res) => {
    
    Hotel.findByIdAndUpdate(req.params.hotelId, {
        name: req.body.name, 
        address: req.body.address,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
    }, {new: true})
    .then(hotel => {
        if(!hotel) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.hotelId
            });
        }
        res.send(hotel);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.hotelId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.hotelId
        });
    });
};

exports.delete = (req, res) => {
    Hotel.findByIdAndRemove(req.params.hotelId)
    .then(hotel => {
        if(!hotel) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.hotelId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.hotelId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.hotelId
        });
    });
};