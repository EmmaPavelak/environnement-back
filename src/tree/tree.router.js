const express = require('express');
const controller = require('./tree.controller');
const checkIdParamMiddleware = require('../common/check-id-param.middleware');
const authenticationMiddleware = require('../common/authentication.middleware');

const treeRouter = express.Router();

treeRouter.get('/', (request, response, next) => controller.findAll(request, response, next));
treeRouter.get('/:id', checkIdParamMiddleware, (request, response, next) => controller.get(request, response, next));
treeRouter.post('/', (request, response, next) => controller.create(request, response, next)); // authenticationMiddleware
treeRouter.put('/:id', checkIdParamMiddleware, (request, response, next) => controller.update(request, response, next)); // authenticationMiddleware
treeRouter.delete('/:id', checkIdParamMiddleware, (request, response, next) => controller.remove(request, response, next));  // authenticationMiddleware

module.exports = treeRouter;
