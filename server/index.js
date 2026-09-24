const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Vimbiso Network',
    message: 'Backend is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/home', (req, res) => {
  res.json({
    greeting: 'Good morning, Tendai',
    identity: 'VMB-000021',
    trustScore: 92,
    demand: 'I need 20kg tomatoes today.',
    quickActions: [
      { label: 'Buy', icon: '🛒' },
      { label: 'Sell', icon: '📦' },
      { label: 'Deliver', icon: '🚚' }
    ],
    requests: [
      {
        title: '20kg Tomatoes',
        location: 'Chitungwiza',
        needed: 'Today',
        status: 'Open'
      },
      {
        title: 'Plumber',
        location: 'Mbare',
        needed: 'Today',
        status: 'Urgent'
      }
    ],
    suppliers: [
      {
        name: 'Tendai Fresh Produce',
        category: 'Food',
        trust: 96,
        distance: '2.1 km',
        price: '$18.00'
      },
      {
        name: 'Mbare Fruits Hub',
        category: 'Horticulture',
        trust: 89,
        distance: '3.4 km',
        price: '$20.00'
      }
    ],
    recentTransactions: [
      {
        buyer: 'Aisha',
        item: 'Tomatoes',
        amount: '$18',
        status: 'Completed'
      },
      {
        buyer: 'Farai',
        item: 'Plumbing',
        amount: '$42',
        status: 'Paid'
      }
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Vimbiso backend running on http://0.0.0.0:${PORT}`);
});
