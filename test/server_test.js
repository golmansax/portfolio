'use strict';

var expect = require('chai').expect;
var Browser = require('zombie');
var server = require('../server');
var StinkBomb = require('stink-bomb');

StinkBomb.configure({ raise: true });

describe('server', function () {
  var browser;
  this.timeout(9000);

  beforeEach(function () {
    var port = 3001;
    this.server = server.listen(port);
    browser = new Browser({ site: 'http://localhost:' + port });
  });

  afterEach(function () {
    this.server.close();
  });

  it('routes root page to resume', function (done) {
    browser.visit('/', function () {
      expect(browser.text('h1')).to.equal('Holman Gao');
      expect(browser.text('body')).to.include('Chalk Schools');
      StinkBomb.create('2015-06-01', { message: 'Sample stink bomb' });
      done();
    });
  });

  it('routes hcd page', function (done) {
    browser.visit('/human-centered-design', function () {
      console.log('here');
      expect(browser.text('h1')).to.include('Human-Centered Design');
      done();
    });
  });

  it('routes donations page', function (done) {
    browser.visit('/donations-pledge', function () {
      expect(browser.text('h1')).to.include('Donations Pledge');
      done();
    });
  });

  it('routes street view page', function (done) {
    browser.visit('/office-street-view', function () {
      expect(browser.text('h1')).to.equal('Office Street View');
      done();
    });
  });
});
