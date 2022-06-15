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

const getAllAppointments = async (req, res) => {
    console.log("hit")
    const response = await appointmentService.getAllAppointment(req.params.doctorId);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        data: response,
        success: true,
        message: 'fetched appointments'
    });
}

const cancelAppointment = async (req, res) => {
    const response = await appointmentService.cancelAppointment(req.body);
    if(!response) {
        return res.status(500).json(serverError);
    }
    return res.status(200).json({
        data: response,
        success: true,
        message: 'successfully cancelled appointments'
    });
}

module.exports = {
    createAppointment,
    getAllAppointments,
    cancelAppointment
}