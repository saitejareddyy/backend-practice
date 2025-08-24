import mongoose from "mongoose";

// const hospitalHours = new mongoose.Schema({
//   hospitalName: {type: mongoose.Schema.Types.ObjectId, ref: "Hospital"},
//   timings: {type: String, required: true},
//   workingHours: {type: String, required} 
// })

const doctorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  salary: {type: String, required: true},
  qualifications: {type: String, required: true},
  exprienceInYears: {type: Number, default: 0},
  worksInHospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital"
    }
  ]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema);