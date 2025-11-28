const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Appointment = require("./models/Appointment");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/appointments")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// API Routes

// Create appointment
app.post("/api/book", async (req, res) => {
    const { name, email, date, time, reason } = req.body;

    const appointment = new Appointment({
        name, email, date, time, reason
    });

    await appointment.save();
    res.json({ message: "Appointment Booked Successfully" });
});

// Get all appointments
app.get("/api/appointments", async (req, res) => {
    const data = await Appointment.find();
    res.json(data);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
