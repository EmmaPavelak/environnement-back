const TreeModel = require('./tree.model');

const toDtos = models => models
  .filter(model => !!model)
  .map(toDto);

const toDto = model => model;

const toModels = dtos => dtos
  .filter(dto => !!dto)
  .map(toModel);


const toModel = dto => new TreeModel(dto);

module.exports = {
  toDtos,
  toDto,
  toModels,
  toModel
}
