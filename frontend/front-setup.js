const { execSync } = require('child_process');
console.log("🚀 Initializing localized Frontend React setup engine...");
try {
    // This forces the React packages to install safely inside your frontend folder
    execSync('npm install react react-dom react-router-dom bootstrap axios --no-audit --no-fund --save-dev --prefix .', { stdio: 'inherit' });
    console.log("✅ Success! Frontend visual packages downloaded perfectly.");
} catch (error) {
    console.log("❌ Execution blocked. Try showing me the text above!");
}