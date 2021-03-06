const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const authGrafeio = require('./server/authGrafeio/authGrafeio.route');
const authPhotografoi = require('./server/authPhotografoi/authPhotografoi.route');
const authSeller = require('./server/authSeller/authSeller.route');
const productRoutes = require('./server/product/product.route');
const sellersRoutes = require('./server/seller/seller.route');
const officerRoutes = require('./server/userGrafeiou/user.route');
const appointmentRoutes = require('./server/appointment/appointment.route');
const customerRoutes = require('./server/Customers/customers.route');
const photografersRoutes = require('./server/photografers/photografers.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);
router.use('/product', productRoutes);
router.use('/sellers',sellersRoutes);
router.use('/officers',officerRoutes);
router.use('/appointments',appointmentRoutes);
router.use('/customers',customerRoutes);
router.use('/photo',photografersRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);
router.use('/auth/Grafeio',authGrafeio);
router.use('/auth/Photografoi',authPhotografoi);
router.use('/auth/Sellers',authSeller);
module.exports = router;
