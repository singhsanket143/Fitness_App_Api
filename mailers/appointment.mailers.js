const {transporter} = require('../config/mailer');

const createAppointmentMailer = async (data) => {
    console.log(data.email)
    const res = await transporter.sendMail({
        from: 'fitness@relevel.com',
        to: data.email,
        subject: 'Your appointment was successfully created',
        text: `
        Hi,
        You have successfully booked an appointment with our doctor.

        Thanks and regards
        `
    });
    console.log("response is", res);
}

module.exports = {
    createAppointmentMailer
}