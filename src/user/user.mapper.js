const model = require('./user.model');
var sha1 = require('sha1');

const toDtos = models => models
  .filter(model => !!model)
  .map(toDto);

const toDto = model => ({
  id: model.id,
  firstname: model.firstname,
  lastname: model.lastname,
  username: model.username,  
  email: model.email,
  password: sha1(model.password),
  tel:model.tel,
  address:model.address,
  birthDate:model.birthDate,
  role:model.role,
  points:model.points,
  registration:model.registration
});

const toModels = dtos => dtos
  .filter(dto => !!dto)
  .map(toModel);

const toModel = dto => new model(dto);


module.exports = {
  toDtos,
  toDto,
  toModels,
  toModel
};
