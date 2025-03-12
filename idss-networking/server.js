const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const pool = require('./db');

app.get('/leaderboard', async (req, res) => {
  const result = await pool.query('SELECT * FROM users ORDER BY points DESC');
  res.json(result.rows);
});
