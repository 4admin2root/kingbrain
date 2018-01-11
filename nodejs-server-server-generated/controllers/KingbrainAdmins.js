'use strict';

var utils = require('../utils/writer.js');
var KingbrainAdmins = require('../service/KingbrainAdminsService');

module.exports.addAdmin = function addAdmin (req, res, next) {
  var body = req.swagger.params['body'].value;
  KingbrainAdmins.addAdmin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdmin = function deleteAdmin (req, res, next) {
  var id = req.swagger.params['id'].value;
  KingbrainAdmins.deleteAdmin(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdmin = function getAdmin (req, res, next) {
  KingbrainAdmins.getAdmin()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdminById = function getAdminById (req, res, next) {
  var id = req.swagger.params['id'].value;
  KingbrainAdmins.getAdminById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginAdmin = function loginAdmin (req, res, next) {
  var body = req.swagger.params['body'].value;
  KingbrainAdmins.loginAdmin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdmin = function updateAdmin (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  KingbrainAdmins.updateAdmin(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
