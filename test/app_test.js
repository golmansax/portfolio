var expect = require('chai').expect;
var Browser = require('zombie');
var app = require('../app').app;

describe('app', function () {
  'use strict';

  var browser;
  this.timeout(9000);

  beforeEach(function () {
    this.server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  afterEach(function () {
    this.server.close();
  });

  it('routes root page to resume', function (done) {
    browser.visit('/', function () {
      expect(browser.text('h1')).to.equal('Holman Gao');
      expect(browser.text('body')).to.include('Chalk Schools');
      done();
    });
  });

  it('routes hcd page', function (done) {
    browser.visit('/human-centered-design', function () {
      expect(browser.text('h1')).to.equal('Human-Centered Design');
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
