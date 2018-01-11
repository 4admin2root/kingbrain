'use strict';

var utils = require('../utils/writer.js');
var KingbrainQuestions = require('../service/KingbrainQuestionsService');

module.exports.addQuestion = function addQuestion (req, res, next) {
  var body = req.swagger.params['body'].value;
  KingbrainQuestions.addQuestion(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createUserAnswer = function createUserAnswer (req, res, next) {
  var body = req.swagger.params['body'].value;
  KingbrainQuestions.createUserAnswer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteQuestion = function deleteQuestion (req, res, next) {
  var id = req.swagger.params['id'].value;
  KingbrainQuestions.deleteQuestion(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuestion = function getQuestion (req, res, next) {
  KingbrainQuestions.getQuestion()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuestionAnswerById = function getQuestionAnswerById (req, res, next) {
  var id = req.swagger.params['id'].value;
  KingbrainQuestions.getQuestionAnswerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuestionById = function getQuestionById (req, res, next) {
  var id = req.swagger.params['id'].value;
  KingbrainQuestions.getQuestionById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuestionRandom = function getQuestionRandom (req, res, next) {
  KingbrainQuestions.getQuestionRandom()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateQuestion = function updateQuestion (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  KingbrainQuestions.updateQuestion(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
