const mongoose = require('mongoose')

const ConsultationSchema = new mongoose.Schema({
	patientCode: {
		type: String, 
		required: true
	},
	ConsultationSummary: {
		type: String, 
		required: true
	},
	attachedFiles: {
		type: String, 
		required: true
	},
	name: {
		type: String, 
		required: true
	}
})

module.exports = mongoose.model('Consultation', ConsultationSchema)