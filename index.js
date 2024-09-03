// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const ngoSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  contactInfo: String
});
const NGO = mongoose.model('NGO', ngoSchema);
module.exports = NGO;

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
  const TestSchema = new mongoose.Schema({
    name: String,
  });
  
  const TestModel = mongoose.model('Test', TestSchema);
  
  app.post('/add-test', async (req, res) => {
    try {
      const testDoc = new TestModel({ name: 'Test Data' });
      await testDoc.save();
      res.status(201).send('Document added');
    } catch (err) {
      res.status(500).send('Error adding document');
    }
  });
  

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
