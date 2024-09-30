// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schemas and Models
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const User = mongoose.model('User', UserSchema);
const Message = mongoose.model('Message', MessageSchema);

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

// Save Message Endpoint
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const newMessage = new Message({ name, email, subject, message });
  await newMessage.save();
  res.send({ success: true });
});

// Start the Server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
