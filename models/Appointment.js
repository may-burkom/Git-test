const { time } = require('console')
const mongoose = require('mongoose')
const AppointmentSchema = new mongoose.Schema({
    patientCode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Appointment", AppointmentSchema)