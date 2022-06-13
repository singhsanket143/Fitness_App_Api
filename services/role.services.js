const {Role} = require('../models/index');

const getAdminRole = async () => {
    try {
        const role = await Role.findOne({
            where: {
                name: 'admin'
            }
        })
        return role;
    } catch (error) {
        console.log(error);
    }
}

const getDoctorRole = async () => {
    try {
        const role = await Role.findOne({
            where: {
                name: 'doctor'
            }
        })
        return role;
    } catch (error) {
        console.log(error);
    }
}

const getPatientRole = async () => {
    try {
        const role = await Role.findOne({
            where: {
                name: 'patient'
            }
        })
        return role;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAdminRole,
    getDoctorRole,
    getPatientRole
}