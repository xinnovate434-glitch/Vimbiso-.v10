const users = [
  {
    id: 'user_001',
    fullName: 'Tendai Moyo',
    phone: '+263771234567',
    role: 'buyer'
  },
  {
    id: 'user_002',
    fullName: 'Tendai Fresh Produce',
    phone: '+263712345678',
    role: 'seller'
  },
  {
    id: 'user_003',
    fullName: 'Mbare Fruits Hub',
    phone: '+263782345678',
    role: 'seller'
  },
  {
    id: 'user_004',
    fullName: 'Farai Driver',
    phone: '+263773456789',
    role: 'delivery'
  }
];

const identities = [
  {
    id: 'id_001',
    userId: 'user_001',
    vimbisoId: 'VMB-000021',
    displayName: 'Tendai Moyo',
    businessName: 'Tendai Fresh Produce',
    category: 'Food',
    location: 'Chitungwiza',
    verificationStatus: 'verified',
    trustScore: 92
  },
  {
    id: 'id_002',
    userId: 'user_002',
    vimbisoId: 'VMB-000031',
    displayName: 'Tendai Fresh Produce',
    businessName: 'Tendai Fresh Produce',
    category: 'Food',
    location: 'Mbare',
    verificationStatus: 'verified',
    trustScore: 96
  },
  {
    id: 'id_003',
    userId: 'user_003',
    vimbisoId: 'VMB-000041',
    displayName: 'Mbare Fruits Hub',
    businessName: 'Mbare Fruits Hub',
    category: 'Horticulture',
    location: 'Mbare',
    verificationStatus: 'verified',
    trustScore: 89
  }
];

const requests = [
  {
    id: 'req_1001',
    userId: 'user_001',
    title: '20kg tomatoes',
    category: 'Food',
    location: 'Chitungwiza',
    budget: '$20',
    requiredBy: 'today',
    status: 'open',
    createdAt: new Date().toISOString()
  }
];

const offers = [
  {
    id: 'offer_2001',
    requestId: 'req_1001',
    supplierUserId: 'user_002',
    supplierName: 'Tendai Fresh Produce',
    trustScore: 96,
    price: '$18.00',
    distance: '2.1 km',
    availability: 'Available today',
    deliveryTime: '30 mins',
    status: 'open'
  },
  {
    id: 'offer_2002',
    requestId: 'req_1001',
    supplierUserId: 'user_003',
    supplierName: 'Mbare Fruits Hub',
    trustScore: 89,
    price: '$20.00',
    distance: '3.4 km',
    availability: 'Available today',
    deliveryTime: '45 mins',
    status: 'open'
  }
];

const orders = [
  {
    id: 'order_3001',
    buyerUserId: 'user_001',
    sellerUserId: 'user_002',
    requestId: 'req_1001',
    offerId: 'offer_2001',
    item: '20kg tomatoes',
    price: '$18.00',
    status: 'paid',
    createdAt: new Date().toISOString()
  }
];

const payments = [
  {
    id: 'pay_4001',
    orderId: 'order_3001',
    provider: 'demo',
    method: 'mobile_money',
    amount: '$18.00',
    status: 'completed'
  }
];

const deliveries = [
  {
    id: 'del_5001',
    orderId: 'order_3001',
    deliveryAgentUserId: 'user_004',
    pickupLocation: 'Mbare Market',
    dropoffLocation: 'Chitungwiza',
    status: 'accepted',
    earnings: '$8.00'
  }
];

const trustEvents = [
  {
    id: 'trust_6001',
    userId: 'user_001',
    eventType: 'order_completed',
    scoreDelta: 2,
    reason: 'Successful order completed'
  }
];

module.exports = {
  users,
  identities,
  requests,
  offers,
  orders,
  payments,
  deliveries,
  trustEvents
};
