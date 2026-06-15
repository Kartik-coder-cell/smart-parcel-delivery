# 📦 Smart Parcel Delivery System (P2P Logistics Prototype)

Welcome to the **Smart Parcel Delivery System**! This is a full-stack peer-to-peer (P2P) crowdsourced logistics platform. It connects everyday commuters travelling between cities with senders who need packages delivered along those exact routes, lowering shipping costs and reducing the regional carbon footprint.

---

## 🛠️ Phase 1: One-Time Software Prerequisites (For Beginners)

Before running the project, your computer needs the following environment tools installed:

1. **Node.js (LTS Version)** - Download and install from: [https://nodejs.org/](https://nodejs.org/)  
   * *This provides the JavaScript runtime engine required to execute the backend database server.*
   
2. **Visual Studio Code (VS Code)** - Download and install from: [https://code.visualstudio.com/](https://code.visualstudio.com/)  
   * *The code editor used to manage and view the project files.*

*(Note: You do NOT need to download XAMPP, Apache, or MySQL. The project runs on an integrated SQLite file database engine).*

---

## 🚀 Phase 2: Manual Step-by-Step Running Guide

Follow these simple steps to launch the project manually on your computer:

### Step 1: Open the Project in VS Code
1. Click the green **Code** button on this GitHub page and select **Download ZIP**.
2. Extract the downloaded ZIP folder anywhere onto your desktop.
3. Open VS Code, go to the top menu, click `File` ➔ `Open Folder...`, and select the extracted `smart-parcel-delivery` folder.

### Step 2: Install Code Packages
1. Open a new terminal window inside VS Code (`Terminal` ➔ `New Terminal`).
2. Type this exact command to step inside the backend folder and press **Enter**:
   ```bash
   cd backend

Type this command to download the internal database drivers and press Enter:

Bash
npm install
(Wait about 10 seconds for the download process to complete).

Step 3: Start the Server Pipeline
In that same terminal window, type this command to turn on the database server and press Enter:

Bash
node server.js
Verify Execution: Confirm that your terminal displays this message:

Plaintext
================================================================
[INTELLIGENT MATRIX ACTIVE] Running smart intercept engine on Port: 5000
================================================================
🚨 CRITICAL WARNING: Keep this terminal window open and running! Closing it turns off the backend system.

Step 4: Open the Frontend Dashboard
Look at the folder files list on the left side of VS Code.

Open the frontend folder, right-click on the index.html file, and select Open with Google Chrome.

🧪 Phase 3: Basic Live Testing Sequence (The Complete Walkthrough)
To see the application compute a live match, follow this exact sequence on your browser screen:

👤 1. Auth Node: Input a name, email, and password. Select a role and click Initialize Profile. This creates your profile entry under User ID: 1.

📦 2. Sender Desk: Input Sender ID 1. In the city fields, type upstream as the pickup city (e.g., nashik) and your destination city (e.g., pune). Click Inject Parcel Packet.

🚀 3. Traveller Deck: Input Traveller ID 1. In the city fields, type your starting city (e.g., nashik) and target destination city (e.g., pune). Click Publish Route Leg.

🤖 Execute Engine: Scroll down on that same Traveller Deck page and click the green Scan Database Pipeline button.

✨ The Result: The system will dynamically execute a relational comparison loop across your database tables and draw a bright green "🔥 LOGISTICAL MATCH DETECTED" card on your screen instantly!
   
