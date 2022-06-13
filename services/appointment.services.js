const {User, Appointment} = require('../models/index'); 

const createAppointment = async (data) => {
    try {
        const newAppointment = await Appointment.create({
            patientId: data.patientId,
            doctorId: data.doctorId
        });
        return newAppointment;
    } catch (error) {   
        console.log(error);
    }
}

const getAllAppointment = async (id) => {
    try {
        const appointments = await Appointment.findAll({
            where: {
                doctorId: id
            }
        });
        return appointments;
    } catch (error) {
        console.log(error);
    }
}

const cancelAppointment = async (data) => {
    try {
        const appointment = await Appointment.findOne({
            patientId: data.patientId,
            doctorId: data.doctorId
        });
        await appointment.destroy();
        return true;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAppointment,
    getAllAppointment,
    cancelAppointment
}