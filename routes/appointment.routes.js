const appointmentController = require('../controllers/appointment.controller');
const appointmentValidator = require('../middlewares/appointment.validator');
const authValidator = require('../middlewares/auth.validator');

const routes = (app) => {
    app.post(
        '/relevel/api/v1/appointment', 
        authValidator.isAuthenticated,
        appointmentValidator.validateAppointment,
        appointmentController.createAppointment
    );
    app.delete(
        '/relevel/api/v1/appointment', 
        authValidator.isAuthenticated,
        appointmentValidator.validateAppointment,
        appointmentController.cancelAppointment
    );
    app.get(
        '/relevel/api/v1/appointment/:doctorId', 
        authValidator.isAuthenticated,
        appointmentController.getAllAppointments
    );
}

module.exports = routes;