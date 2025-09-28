const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// --- 1. CONFIGURATION ---
const app = express();
const PORT = 3000;

// !!! IMPORTANT: REPLACE THE PLACEHOLDER BELOW WITH YOUR MONGODB ATLAS CONNECTION STRING !!!
const MONGO_URI = 'mongodb+srv://khirulislam135:Badol2465@cluster0.fw2xghq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// --- 2. DATABASE CONNECTION (MongoDB Atlas) ---

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Atlas successfully connected.'))
    .catch(err => console.error('MongoDB Atlas connection error:', err));


// --- 3. INITIAL ROUTE (Placeholder) ---

// Basic root route to confirm the server is running
app.get('/', (req, res) => {
    res.send('Quiz Application Backend Initialized.');
});


// --- 4. START SERVER ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Use CTRL+C to stop the server.');
});
