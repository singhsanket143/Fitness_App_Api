const validateAppointment = (req, res, next) => {
    if(!(req.body.doctorId && req.body.patientId)) {
        return res.status(400).json({
            message: 'Missing doctorId or patientId',
            success: false,
            data: {}
        });
    }
    next();
}

module.exports = {
    validateAppointment
}
