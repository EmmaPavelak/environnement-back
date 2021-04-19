const express = require('express');
const authRouter = require('./user/user.router');
const contactRouter = require('./contact/contact.router');
const treeRouter = require('./tree/tree.router');
const routeNotFoundMiddleware = require('./common/route-not-found.middleware');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/contact', contactRouter);
router.use('/tree', treeRouter);
router.use(routeNotFoundMiddleware);

module.exports = router;
