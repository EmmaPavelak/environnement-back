const express = require('express');
const controller = require('./user.controller');
const checkIdParamMiddleware = require('../common/check-id-param.middleware');
const authMiddleware = require('../common/authentication.middleware');
const authorizationMiddleware= require('../common/authorization.middleware');
const router = express.Router();

router.post('/login', controller.login);

router.get('/users', (request, response, next) => controller.findAll(request, response, next));
router.get('/users/:id', checkIdParamMiddleware, (request, response, next) => controller.getById(request, response, next));
router.post('/registration', (request, response, next) => controller.registration(request, response, next));
router.put('/:id',checkIdParamMiddleware, (request, response, next) => controller.update(request, response, next)); // authMiddleware, authorizationMiddleware
router.delete('/:id', checkIdParamMiddleware, (request, response, next) => controller.remove(request, response, next));

module.exports = router;
