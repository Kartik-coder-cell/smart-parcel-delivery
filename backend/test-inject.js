const db = require('./config/db');

async function directInjectTest() {
    console.log("⚡ Initiating direct structural database insertion bypass...");
    try {
        // This injects a matching target pair directly into your MySQL storage cells
        await db.query(`INSERT INTO parcels (sender_id, pickup_city, destination_city, weight, description) 
                        VALUES (1, 'Nashik', 'Mumbai', 4.5, 'Hackathon Prototype Display Models')`);
                        
        await db.query(`INSERT INTO routes (traveller_id, source_city, destination_city, travel_date) 
                        VALUES (1, 'Nashik', 'Mumbai', '2026-06-20')`);

        console.log("✅ Success! Both rows injected directly into smart_parcel_db.");
        console.log("👉 Now open your browser webpage, head to the Traveller Deck tab, and click the Scan button!");
        process.exit(0);
    } catch (err) {
        console.log("❌ Matrix Error details:", err.message);
        process.exit(1);
    }
}

directInjectTest();