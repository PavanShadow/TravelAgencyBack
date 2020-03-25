module.exports = (app) => {
    const hotels = require('../controllers/hotel.controller.js');

    app.post('/hotels', hotels.create);

    app.get('/hotels', hotels.findAll);

    app.get('/hotels/:hotelId', hotels.findOne);

    app.put('/hotels/:hotelId', hotels.update);

    app.delete('/hotels/:hotelId', hotels.delete);
}