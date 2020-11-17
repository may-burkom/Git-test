const express = require('express')
const mongoose = require('mongoose')

const Patient = require('./models/Patient')
const Appointment = require('./models/Appointment')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect('mongodb+srv://may831:tempPassword123@smbootcamp2020.dw1al.gcp.mongodb.net/Wk12_Project?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, 
    function(err, database){
        if(err){
            throw err
        }
        console.log("Connection made to database")
    }
)

////////ROUTES - THESE ARE JUST TEMPORARY WE CAN CHANGE THE NAMES AROUND ////////////////////////

//route for saving new patient created
app.post('/save-patient', function(req, res){
    console.log(req.body)
    let newPatient = new Patient({
        patientCode: req.body.patientCode,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        residency: req.body.residency,
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        contact: req.body.contact,
        appointments: {
            date: req.body.appointments.date,
            doctor: req.body.appointments.doctor,
            room: req.body.appointments.room
        },
        consultations: {
            consultDate: req.body.consultations.consultDate,
            consultationSummary: req.body.consultations.consultationSummary,
            consultingDoctor: req.body.consultations.consultingDoctor,
            attachedFiles: req.body.consultations.attachedFiles
        }
    })
    newPatient.save()
        .then(function(pat){
            console.log(pat)
        })
        .catch((err) => console.log(err))
})

/////////////////////////////////////////////////////////////////////////////////////

app.listen(4040, () => console.log("app listening at http://localhost:4040"))