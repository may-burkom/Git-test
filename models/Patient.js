const mongoose = require('mongoose')
const PatientSchema = new mongoose.Schema({
    patientCode: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    residency: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    appointments: {
        type: Object,
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
        },
        required: true
    },
    consultations: {
        type: Object,
        consultDate: {
            type: Date,
            default: Date.now,
            required: true
        },
        consultationSummary: {
            type: String, 
            required: true
        },
        consultingDoctor: {
            type: String,
            required: true
        },
        attachedFiles: {
            type: String, 
            required: true
        },
        required: true
    }
})

module.exports = mongoose.model("Patient", PatientSchema)