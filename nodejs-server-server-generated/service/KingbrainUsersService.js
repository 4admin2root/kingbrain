'use strict';


/**
 * add a new user
 *
 * body User Create user object
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user
 * delete user triggered by admin
 *
 * openid String 
 * no response value expected for this operation
 **/
exports.deleteUser = function(openid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete user
 * delete user triggered by admin
 *
 * phone String 
 * no response value expected for this operation
 **/
exports.deleteUserByPhone = function(phone) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get userinfo from backend with openid
 * get userinfo from backend with openid
 *
 * openid String 
 * returns User
 **/
exports.getUserByOpenid = function(openid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userStatus" : 6,
  "phone" : 0,
  "openid" : "openid",
  "trial_times" : 1,
  "name" : "name",
  "avatar" : "avatar"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get userinfo from backend with phone
 * get userinfo from backend with phone
 *
 * phone String 
 * returns User
 **/
exports.getUserByPhone = function(phone) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userStatus" : 6,
  "phone" : 0,
  "openid" : "openid",
  "trial_times" : 1,
  "name" : "name",
  "avatar" : "avatar"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update userinfo
 * update userinfo
 *
 * openid String 
 * body User 
 * no response value expected for this operation
 **/
exports.updateUser = function(openid,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update userinfo
 * update userinfo
 *
 * phone String 
 * body User 
 * no response value expected for this operation
 **/
exports.updateUserByPhone = function(phone,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

