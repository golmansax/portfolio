var express = require('express');
var osvApp = express();
osvApp.use(express.static(__dirname + '/vendor/office-street-view/dist/'));

exports.app = osvApp;
