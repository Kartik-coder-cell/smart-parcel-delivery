// const mysql = require('mysql2');
// require('dotenv').config();

// // This sets up a connection pool to your XAMPP MySQL database
// const pool = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || '',
//     database: process.env.DB_NAME || 'smart_parcel_db',
//     port: 3306, // If you changed your XAMPP port to 3307 earlier, change this number to 3307!
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// module.exports = pool.promise();

const mysql = require('mysql2/mysql-native'); // or mysql2

// Create a direct connection pool to your local XAMPP MySQL database
const pool = mysql.createPool({
    host: '127.0.0.1',      // Using the direct local IP address avoids network timeout delays
    user: 'root',           // Default XAMPP username
    password: '',           // Default XAMPP password is empty/blank
    database: 'smart_parcel_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();