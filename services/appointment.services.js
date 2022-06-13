const {User, Appointment} = require('../models/index'); 
const roleService = require('./role.services');

const createAppointment = async (data) => {
    try {
        const patient = await User.findByPk(data.patientId);
        const doctor = await User.findByPk(data.doctorId);
        if(!patient || !doctor) {
            return {
                error: 'Invalid entries, no patient or doctor exists'
            }
        }
        const isPatient = await patient.hasRole(await roleService.getPatientRole());
        const isDoctor = await doctor.hasRole(await roleService.getDoctorRole());
        if(!isPatient) {
            return {
                error: 'No such patient exist'
            }
        }
        if(!isDoctor) {
            return {
                error: 'No such doctor exists'
            }
        }
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