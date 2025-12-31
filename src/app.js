if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const homeServiceRoutes = require('./routes/homeServiceRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const faqRoutes = require('./routes/faqRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();

/* =========================
   DB CONNECTION (SAFE)
========================= */
let isConnected = false;

async function dbConnectOnce() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
    console.log('✅ DB connected');
  }
}
dbConnectOnce();

/* =========================
   MIDDLEWARES
========================= */
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

/* =========================
   ROUTES
========================= */
app.use('/api/faqs', faqRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api', vendorRoutes);
app.use('/api', homeServiceRoutes);
app.use('/api/search', searchRoutes);

/* =========================
   HEALTH CHECK
========================= */
app.get('/', (req, res) => {
  res.json({ status: 'OK', platform: 'Vercel' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

/* =========================
   404
========================= */
app.use((req, res) => {
  res.status(404).json({ message: 'API not found' });
});

module.exports = app;
