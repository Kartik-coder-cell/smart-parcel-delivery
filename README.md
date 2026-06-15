# 📦 Smart Parcel Delivery System - Quick Start Guide

Hey bro! Follow this step-by-step guide to set up and run the project on your machine right from scratch. You don't need any special database software or extensions installed—everything is built right into the code!

---

### 🛠️ Step 1: Install Node.js (If you don't have it)
The backend runs on Node.js. If you haven't installed it yet:
1. Go to https://nodejs.org/ and download the **LTS Version**.
2. Run the installer and click "Next" until it finishes.

---

### 📂 Step 2: Open the Project in VS Code
1. Download or clone the project folder from GitHub.
2. Open **VS Code**.
3. Go to **File > Open Folder** and select the main `smart-parcel-delivery` project folder.

---

### 📥 Step 3: Install the Project Dependencies
We need to download the code packages (like Express and SQLite) that make the app work.
1. In VS Code, open the terminal by pressing **Ctrl + `** (or go to **Terminal > New Terminal** at the top menu).
2. Type the following command and hit **Enter**:
   ```bash
   npm install
(Wait a few seconds for it to finish downloading the node_modules folder).

🚀 Step 4: Start the Backend Server
Now let's turn on the database and API pipeline.

In your terminal, move into the backend directory by typing:

Bash
cd backend
Start the server by running:

Bash
node server.js

Look at your terminal! You should see green success messages like:
[DATABASE ONLINE] Connected to permanent SQLite file engine.
(Note: The system automatically generates a brand new, private database file named database.sqlite inside your backend folder right now!)

🌐 Step 5: Start the Frontend Interface
Keep the backend terminal running! Now let's open the website.

Open a second terminal split in VS Code (click the + icon or split button in the terminal panel panel).

Move into the frontend directory:

Bash
cd frontend
Start the frontend server:

Bash
npm run dev

Click the local link that pops up in your terminal (usually http://localhost:5173 or similar) to open the dashboard in your Google Chrome browser!

🧪 Step 6: How to Test a Live Relational Match!
To watch the automated matchmaking system do its magic, perform this exact sequence in your browser tabs:

👤 Tab 1 (Auth Node): Register a brand new user profile. Put in any name, password, email, and mobile number. Click Initialize Profile. A popup will tell you what ID was created (e.g., Assigned User ID: 2). Remember that ID!

📦 Tab 2 (Sender Desk): Enter that User ID. Set Pickup City to nashik and Destination City to pune. Click Inject Parcel Packet.

🚀 Tab 3 (Traveller Deck): Enter the exact same User ID. Set Source City to nashik and Destination City to pune. Click Publish Route Leg.

🤖 Scroll down to the Match Engine: Click the green Scan Database Pipeline button.

Boom! The yellow bar will disappear, and a green "🔥 LOGISTICAL MATCH DETECTED" card will slide onto your screen showing the cargo routing details matching your exact travel vectors!
