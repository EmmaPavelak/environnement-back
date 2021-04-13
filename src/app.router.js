const express = require('express');
const authRouter = require('./user/user.router');
const contactRouter = require('./contact/contact.router');
<<<<<<< HEAD
const treeRouter = require('./tree/tree.router');
=======
const usersmessageRouter = require('./users-message/users-message.router');
>>>>>>> 4b801ec47fa772fb668bfae52ec0a971f8936ef8
const routeNotFoundMiddleware = require('./common/route-not-found.middleware');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/contact', contactRouter);
<<<<<<< HEAD
router.use('/tree', treeRouter);
=======
router.use('/users-message', usersmessageRouter);
>>>>>>> 4b801ec47fa772fb668bfae52ec0a971f8936ef8
router.use(routeNotFoundMiddleware);

module.exports = router;
