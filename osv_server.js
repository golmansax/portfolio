'use strict';

var express = require('express');
var osvServer = express();
osvServer.use(express.static(__dirname + '/vendor/office-street-view/dist/'));

module.exports = osvServer;
