'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  loginname  : { type: String },
	password   : { type: String },
  email      : { type: String },
  phone      : { type: String },
  userType   : { type: String },
	accessToken: { type: String }
});

mongoose.model('User', UserSchema);