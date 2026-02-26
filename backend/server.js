require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const Consultation = require('./models/Consultation');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/auth', authRoutes);
app.post('/api/consultations', async (req, res) => {
    try {
        const { name, email, phone, healthGoal, message } = req.body;

        // Simple validation
        if (!name || !email || !phone || !healthGoal) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const newConsultation = new Consultation({
            name,
            email,
            phone,
            healthGoal,
            message,
        });

        const savedConsultation = await newConsultation.save();
        res.status(201).json({ success: true, message: 'Consultation request received successfully', data: savedConsultation });
    } catch (error) {
        console.error('Error saving consultation:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Internal server error while processing your request' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Wellsense backend API is running' });
});

// Serve frontend static files in production
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(frontendBuildPath));

// Catch-all: serve React app for any non-API route (client-side routing)
app.get('{*splat}', (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Internal server error',
        code: err.code || 'INTERNAL_ERROR'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
