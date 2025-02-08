// backend/server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
