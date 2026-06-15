const db = require('../config/db');

exports.createParcel = async (req, res) => {
    try {
        const { pickup_city, destination_city, weight, description } = req.body;
        const sender_id = req.user.id;
        await db.query(
            'INSERT INTO parcels (sender_id, pickup_city, destination_city, weight, description, status) VALUES (?, ?, ?, ?, ?, "Pending")',
            [sender_id, pickup_city, destination_city, weight, description]
        );
        res.status(201).json({ message: 'Parcel request created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getParcels = async (req, res) => {
    try {
        let query = 'SELECT * FROM parcels';
        let params = [];
        if (req.user.role === 'Sender') {
            query += ' WHERE sender_id = ?';
            params.push(req.user.id);
        }
        const [parcels] = await db.query(query, params);
        res.json(parcels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};