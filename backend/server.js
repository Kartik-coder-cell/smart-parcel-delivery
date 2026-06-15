// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Bind Config Core
// const db = require('./config/db');
// const authController = require('./controllers/authController');

// // --- API MATRIX TARGET LINKAGE ---
// app.post('/api/auth/register', authController.register);

// // Dynamic Localized Middleware Pipeline Bypass For Testing Real-Time Posts
// // app.post('/api/parcels', async (req, res) => {
// //     try {
// //         const { sender_id, pickup_city, destination_city, weight, description } = req.body;
// //         await db.query('INSERT INTO parcels (sender_id, pickup_city, destination_city, weight, description) VALUES (?, ?, ?, ?, ?)', 
// //         [sender_id, pickup_city, destination_city, weight, description]);
// //         res.status(201).json({ message: 'Success' });
// //     } catch (err) { res.status(500).json({ error: err.message }); }
// // });

// // Upgraded Parcel Input Bypass Engine
// app.post('/api/parcels', async (req, res) => {
//     try {
//         const { sender_id, pickup_city, destination_city, weight, description } = req.body;
//         // Using a safe direct insertion layout
//         await db.query('INSERT INTO parcels (sender_id, pickup_city, destination_city, weight, description) VALUES (?, ?, ?, ?, ?)', 
//         [sender_id || 1, pickup_city, destination_city, weight || 1.0, description]);
//         res.status(201).json({ message: 'Success' });
//     } catch (err) { 
//         console.log("Database Error Details:", err.message);
//         res.status(500).json({ error: err.message }); 
//     }
// });

// app.get('/api/parcels', async (req, res) => {
//     try {
//         const [rows] = await db.query('SELECT * FROM parcels');
//         res.json(rows);
//     } catch (err) { res.status(500).json({ error: err.message }); }
// });

// app.post('/api/routes', async (req, res) => {
//     try {
//         const { traveller_id, source_city, destination_city, travel_date } = req.body;
//         await db.query('INSERT INTO routes (traveller_id, source_city, destination_city, travel_date) VALUES (?, ?, ?, ?)', 
//         [traveller_id, source_city, destination_city, travel_date]);
//         res.status(201).json({ message: 'Success' });
//     } catch (err) { res.status(500).json({ error: err.message }); }
// });

// app.get('/api/routes', async (req, res) => {
//     try {
//         const [rows] = await db.query('SELECT * FROM routes');
//         res.json(rows);
//     } catch (err) { res.status(500).json({ error: err.message }); }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`[Runtime Environment Online] Server tracking port execution: ${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // --- SECURE IN-MEMORY STARTUP DATA STORES ---
// let users = [
//     { id: 1, name: 'System Admin', email: 'admin@smartparcel.com', role: 'Admin' }
// ];
// let parcels = [];
// let routes = [];
// let feedback = [];
// let assignments = [];

// // --- 1. USER AUTH NODE ENDPOINT ---
// app.post('/api/auth/register', (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;
        
//         // Validation check to match your real schema.sql UNIQUE rule
//         if (users.find(u => u.email === email)) {
//             return res.status(400).json({ message: 'Error: Email already registered in system.' });
//         }

//         const newUser = {
//             id: users.length + 1,
//             name,
//             email,
//             role: role || 'Sender'
//         };
//         users.push(newUser);
//         console.log(`[Memory DB Register] Committed Row to User Index: ID #${newUser.id}`);
//         res.status(201).json({ message: 'Success', user: newUser });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // --- 2. SENDER DESK ENDPOINTS ---
// app.post('/api/parcels', (req, res) => {
//     try {
//         const { sender_id, pickup_city, destination_city, weight, description } = req.body;
        
//         const newParcel = {
//             id: parcels.length + 1,
//             sender_id: parseInt(sender_id) || 1,
//             pickup_city,
//             destination_city,
//             weight: parseFloat(weight) || 1.0,
//             description,
//             status: 'Pending'
//         };
//         parcels.push(newParcel);
//         console.log(`[Memory DB Cargo] Injected Parcel Request: ID #${newParcel.id}`);
//         res.status(201).json({ message: 'Success' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.get('/api/parcels', (req, res) => {
//     res.json(parcels);
// });

// // --- 3. TRAVELLER DECK ENDPOINTS ---
// app.post('/api/routes', (req, res) => {
//     try {
//         const { traveller_id, source_city, destination_city, travel_date } = req.body;
        
//         const newRoute = {
//             id: routes.length + 1,
//             traveller_id: parseInt(traveller_id) || 2,
//             source_city,
//             destination_city,
//             travel_date
//         };
//         routes.push(newRoute);
//         console.log(`[Memory DB Vector] Published Commuter Leg: ID #${newRoute.id}`);
//         res.status(201).json({ message: 'Success' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.get('/api/routes', (req, res) => {
//     res.json(routes);
// });

// // --- BASE API MONITOR CHECK ---
// app.get('/', (req, res) => {
//     res.send('Smart Parcel Delivery Core Pipeline Memory Engine Operational!');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`================================================================`);
//     console.log(`[SERVER ACTIVE] Bypassed XAMPP Block! Running safely on Port: ${PORT}`);
//     console.log(`================================================================`);
// });


const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// --- PERMANENT FILE-BASED SQL DATABASE STORAGE ---
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database connection error:', err.message);
    else console.log('[DATABASE ONLINE] Connected to permanent SQLite file engine.');
});

// --- INITIALIZE TABLES (Matches your real schema structural rules) ---
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT CHECK(role IN ('Sender', 'Traveller', 'Admin')) NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS parcels (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_id INTEGER NOT NULL,
        pickup_city TEXT NOT NULL,
        destination_city TEXT NOT NULL,
        weight REAL NOT NULL,
        description TEXT NOT NULL,
        status TEXT DEFAULT 'Pending',
        FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS routes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        traveller_id INTEGER NOT NULL,
        source_city TEXT NOT NULL,
        destination_city TEXT NOT NULL,
        travel_date TEXT NOT NULL,
        FOREIGN KEY (traveller_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
    
    // Seed Admin Profile
    db.run(`INSERT OR IGNORE INTO users (id, name, email, password, role) 
            VALUES (1, 'System Admin', 'admin@smartparcel.com', 'admin123', 'Admin')`);
});

// --- 1. USER AUTH NODE ENDPOINT ---
app.post('/api/auth/register', (req, res) => {
    const { name, email, password, role } = req.body;
    const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
    
    db.run(query, [name, email, password, role || 'Sender'], function(err) {
        if (err) {
            return res.status(400).json({ message: 'Error: Email already exists or input invalid.' });
        }
        res.status(201).json({ message: 'Success', user: { id: this.lastID, name, email, role } });
    });
});

// --- 2. SENDER DESK ENDPOINTS ---
app.post('/api/parcels', (req, res) => {
    const { sender_id, pickup_city, destination_city, weight, description } = req.body;
    const query = `INSERT INTO parcels (sender_id, pickup_city, destination_city, weight, description) VALUES (?, ?, ?, ?, ?)`;
    
    db.run(query, [parseInt(sender_id) || 1, pickup_city.toLowerCase(), destination_city.toLowerCase(), parseFloat(weight), description], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Success' });
    });
});

app.get('/api/parcels', (req, res) => {
    db.all(`SELECT * FROM parcels`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// --- 3. TRAVELLER DECK ENDPOINTS ---
app.post('/api/routes', (req, res) => {
    const { traveller_id, source_city, destination_city, travel_date } = req.body;
    const query = `INSERT INTO routes (traveller_id, source_city, destination_city, travel_date) VALUES (?, ?, ?, ?)`;
    
    db.run(query, [parseInt(traveller_id) || 1, source_city.toLowerCase(), destination_city.toLowerCase(), travel_date], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Success' });
    });
});

app.get('/api/routes', (req, res) => {
    db.all(`SELECT * FROM routes`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`================================================================`);
    console.log(`[PERMANENT SERVER ACTIVE] Storage locked to local file database! Port: ${PORT}`);
    console.log(`================================================================`);
});