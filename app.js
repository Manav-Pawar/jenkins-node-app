const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple health check route
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Jenkins Node App is running!' });
});

// Add two numbers
app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({ result: a + b });
});

// Multiply two numbers
app.get('/multiply/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({ result: a * b });
});

// Subtract two numbers
app.get('/subtract/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({ result: a - b });
});

// Only start the server if this file is run directly (not during tests)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export for testing
module.exports = app;