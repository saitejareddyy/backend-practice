import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diagonsedWith: { type: string, required: true },
  address: { type: string, required: true },
  age: { type: Number, required: true },
  bloodGroup: { type: string, required: true },
  gender: { type: string, enum: ["M", "F", "O"], required: true },
  admittedIn: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  treatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }
}, { timestamps: true })

export const Patient = mongoose.model("Patient", patientSchema); 