'use strict';


/**
 * add a question
 *
 * body Question_Answer Create question object
 * no response value expected for this operation
 **/
exports.addQuestion = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * create useranswer
 * post a useranswer
 *
 * body Question_Answer 
 * no response value expected for this operation
 **/
exports.createUserAnswer = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete question
 * delete question triggered by admin
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteQuestion = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get a question
 *
 * returns List
 **/
exports.getQuestion = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "subject" : "subject",
  "option3" : "option3",
  "option4" : "option4",
  "option1" : "option1",
  "id" : 0,
  "option2" : "option2",
  "title" : "title"
}, {
  "subject" : "subject",
  "option3" : "option3",
  "option4" : "option4",
  "option1" : "option1",
  "id" : 0,
  "option2" : "option2",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get question answer from backend with id
 * get question answer from backend with id
 *
 * id String 
 * returns Answer
 **/
exports.getQuestionAnswerById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "value" : "value"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get question from backend with id
 * get question from backend with id
 *
 * id String 
 * returns Question
 **/
exports.getQuestionById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subject" : "subject",
  "option3" : "option3",
  "option4" : "option4",
  "option1" : "option1",
  "id" : 0,
  "option2" : "option2",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a question
 *
 * returns Question
 **/
exports.getQuestionRandom = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subject" : "subject",
  "option3" : "option3",
  "option4" : "option4",
  "option1" : "option1",
  "id" : 0,
  "option2" : "option2",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update question
 * update question
 *
 * id String 
 * body Question_Answer 
 * no response value expected for this operation
 **/
exports.updateQuestion = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

