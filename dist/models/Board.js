'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Board = new _mongoose2.default.Schema({
  title: { type: String },
  content: { type: String },
  created_at: { type: Date }
});

exports.default = _mongoose2.default.model('Board', Board);