const appointmentService = require('../services/appointment.services');

const serverError = {
    message: 'Something went wrong',
    success: false,
    data: {}
}


const createAppointment = async (req, res) => {
    const response = await appointmentService.createAppointment(req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    if(response.error) {
        serverError.message = response.error;
        return res.status(400).json(serverError);
    }
    return res.status(201).json({
        data: response,
        success: true,
        message: 'Created appointment'
    });
}

module.exports = {
    createAppointment
}