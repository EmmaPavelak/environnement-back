const jwt = require('jsonwebtoken');
const repository = require('./user.repository');
<<<<<<< HEAD:src/user/user.service.js
const mapper = require('./user.mapper');
const tokenService = require('../common/token.service');
const { INVALID_CREDENTIALS } = require('../common/error/error-type');
var sha1 = require('sha1');
=======
const mapper = require('./auth.mapper');
const tokenService = require('../common/token.service');
const { INVALID_CREDENTIALS } = require('../common/error/error-type');
//const bcrypt = require('bcrypt');
var sha1 = require('sha1');



>>>>>>> 4b801ec47fa772fb668bfae52ec0a971f8936ef8:src/auth/auth.service.js

class AuthService {
  login(credentials) {
    return repository.findByCredentials(credentials.username, sha1(credentials.password))
      .then(user => {
        if (user) {
          return tokenService.generateToken(mapper.toDto(user))
        }
        return Promise.reject({ type: INVALID_CREDENTIALS });
      });
  }
  save(model, id) {
   /* return Promise.resolve(new Dto({ ...rawDto, id }))
     .then(dto => mapper.toModel(dto))
     .then(model => {*/
        if (id) {
          return repository.update(mapper.toDto(model));
        } else {
          return repository.create(mapper.toDto(model));
        }
   //  })
     // .then(model => mapper.toDto(model));
  }
  findAll() {
    return repository.findAll()
<<<<<<< HEAD:src/user/user.service.js
    .then(users => mapper.toDtos(users));
=======
>>>>>>> 4b801ec47fa772fb668bfae52ec0a971f8936ef8:src/auth/auth.service.js
  }

  getById(id) {
    return repository.getById(id)
  }
<<<<<<< HEAD:src/user/user.service.js
  remove(id) {
    return repository.remove(id)
      .then(() => undefined);
  }
=======
>>>>>>> 4b801ec47fa772fb668bfae52ec0a971f8936ef8:src/auth/auth.service.js
  
}

const authService = new AuthService();

module.exports = authService;
