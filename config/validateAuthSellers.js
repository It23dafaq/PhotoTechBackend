const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      fullName: Joi.string().required(),
      isAdmin: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      fullName: Joi.string().required(),
      isAdmin: Joi.string().required(),
      password: Joi.string().required()
    }

  },

  // POST /api/auth/login
  login: {
    body: {
      sallerName: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
