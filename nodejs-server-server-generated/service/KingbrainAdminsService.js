'use strict';


/**
 * add a adminuser
 *
 * body Admin Create adminuser object
 * no response value expected for this operation
 **/
exports.addAdmin = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete admin
 * delete adminuser triggered by admin
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteAdmin = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get a adminuser
 *
 * returns List
 **/
exports.getAdmin = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "id" : 0,
  "username" : "username"
}, {
  "password" : "password",
  "id" : 0,
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get adminuser from backend with id
 * get adminuser from backend with id
 *
 * id String 
 * returns Admin
 **/
exports.getAdminById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "id" : 0,
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * admin login
 *
 * body AdminAuth admin auth
 * no response value expected for this operation
 **/
exports.loginAdmin = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update admin
 * update admin
 *
 * id String 
 * body Question 
 * no response value expected for this operation
 **/
exports.updateAdmin = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

