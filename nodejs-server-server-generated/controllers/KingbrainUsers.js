'use strict';

var utils = require('../utils/writer.js');
var KingbrainUsers = require('../service/KingbrainUsersService');

module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  KingbrainUsers.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var openid = req.swagger.params['openid'].value;
  KingbrainUsers.deleteUser(openid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUserByPhone = function deleteUserByPhone (req, res, next) {
  var phone = req.swagger.params['phone'].value;
  KingbrainUsers.deleteUserByPhone(phone)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByOpenid = function getUserByOpenid (req, res, next) {
  var openid = req.swagger.params['openid'].value;
  KingbrainUsers.getUserByOpenid(openid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByPhone = function getUserByPhone (req, res, next) {
  var phone = req.swagger.params['phone'].value;
  KingbrainUsers.getUserByPhone(phone)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var openid = req.swagger.params['openid'].value;
  var body = req.swagger.params['body'].value;
  KingbrainUsers.updateUser(openid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserByPhone = function updateUserByPhone (req, res, next) {
  var phone = req.swagger.params['phone'].value;
  var body = req.swagger.params['body'].value;
  KingbrainUsers.updateUserByPhone(phone,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
