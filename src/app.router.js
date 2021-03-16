const express = require('express');
const authRouter = require('./auth/auth.router');
const characterRouter = require('./character/character.router');
const routeNotFoundMiddleware = require('./common/route-not-found.middleware');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/characters', characterRouter);
router.use(routeNotFoundMiddleware);

module.exports = router;