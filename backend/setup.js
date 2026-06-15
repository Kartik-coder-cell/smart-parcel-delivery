const http = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

console.log("🚀 Starting bypass installation engine...");

try {
    // This bypasses the glitched npm folder maker and forces it to install locally
    execSync('npm install express cors dotenv mysql2 bcrypt jsonwebtoken --no-audit --no-fund --save-dev --prefix .', { stdio: 'inherit' });
    console.log("✅ Success! All backend files downloaded perfectly.");
} catch (error) {
    console.log("❌ Standard execution blocked. Running fallback download...");
    try {
        execSync('npm config set globalconfig ./npm text && npm install express cors dotenv mysql2 bcrypt jsonwebtoken', { stdio: 'inherit' });
        console.log("✅ Fallback successful! Files are ready.");
    } catch (e) {
        console.log("Please copy the text printed above and show me!");
    }
}