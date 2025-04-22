const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy credentials for testing
  const validUsername = 'admin';
  const validPassword = '12345';

  if (username === validUsername && password === validPassword) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
