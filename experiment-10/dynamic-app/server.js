const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
let feedback = [];
app.get('/health', (req, res) => res.json({ status: 'OK', message: 'Dynamic app is running.' }));
app.get('/feedback', (req, res) => res.json(feedback));
app.post('/feedback', (req, res) => {
  const name = String(req.body.name || '').trim();
  const message = String(req.body.message || '').trim();
  if (!name || !message) return res.status(400).json({ success: false, message: 'Name and feedback are required.' });
  const item = { id: feedback.length + 1, name, message };
  feedback.push(item);
  res.status(201).json({ success: true, message: 'Feedback received.', feedback: item });
});
app.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('Dynamic app running'));
