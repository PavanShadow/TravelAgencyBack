module.exports = (app) => {
    const destinations = require('../controllers/destination.controller.js');

    app.post('/destinations', destinations.create);

    app.get('/destinations', destinations.findAll);

    app.get('/destinations/:destinationId', destinations.findOne);

    app.put('/destinations/:destinationId', destinations.update);

    app.delete('/destinations/:destinationId', destinations.delete);
}