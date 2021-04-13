const { ValidationError } = require('sequelize');
const TreeModel = require('./tree.model');
const { RESOURCE_ID_NOT_FOUND, MISSING_RESOURCE_FIELD } = require('../common/error/error-type');

const findAll = () => {
  return TreeModel.findAll();
};

const get = id => {
  return TreeModel.findByPk(id)
    .then(model => {
      if (model) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    })
};

const create = model => {
  return TreeModel.create(model)
    .catch(error => {
      if (error instanceof ValidationError) {
        return Promise.reject({ type: MISSING_RESOURCE_FIELD, param: error.errors[0].path });
      }
      return Promise.reject(error);
    });
};

const update = model => {
  return TreeModel.update(model, { where: { id: model.id } })
    .then(([affectedRowsCount]) => {
      if (affectedRowsCount) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: model.id });
      }
    });
};

const remove = id => {
  return TreeModel.destroy({ where: { id } })
    .then((affectedRowsCount) => {
      if (affectedRowsCount) {
        return undefined;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    });
};

module.exports = {
  findAll,
  get,
  create,
  update,
  remove
};
