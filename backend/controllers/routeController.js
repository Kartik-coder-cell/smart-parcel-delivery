const db = require('../config/db');

exports.createRoute = async (req, res) => {
    try {
        const { source_city, destination_city, travel_date } = req.body;
        const traveller_id = req.user.id;
        await db.query(
            'INSERT INTO routes (traveller_id, source_city, destination_city, travel_date) VALUES (?, ?, ?, ?)',
            [traveller_id, source_city, destination_city, travel_date]
        );
        res.status(201).json({ message: 'Travel route created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getRoutes = async (req, res) => {
    try {
        let query = 'SELECT * FROM routes';
        let params = [];
        if (req.user.role === 'Traveller') {
            query += ' WHERE traveller_id = ?';
            params.push(req.user.id);
        }
        const [routes] = await db.query(query, params);
        res.json(routes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};