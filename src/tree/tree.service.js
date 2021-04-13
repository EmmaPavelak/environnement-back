const treeRepository = require('./tree.repository');
const treeMapper = require('./tree.mapper');

class TreeService {

  findAll() {
    return treeRepository.findAll()
      .then(trees => treeMapper.toDtos(trees));
  }

  get(id) {
    return treeRepository.get(id)
      .then(tree => treeMapper.toDto(tree));
  }

  save(model, id) {

        if (id) {
          return treeRepository.update(model);
        } else {
          return treeRepository.create(model);
        }

  }

  remove(id) {
    return treeRepository.remove(id)
      .then(() => undefined);
  }
}

const treeService = new TreeService();
module.exports = treeService;
