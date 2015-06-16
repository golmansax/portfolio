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

  it('routes root page to portfolio', function (done) {
    browser.visit('/', function () {
      expect(browser.text('title')).to.equal('Holman Gao');
      expect(browser.text('h1')).to.equal('Holman Gao');
      expect(browser.text('body')).to.include('Chalk Schools');
      StinkBomb.create('2016-06-01', { message: 'Sample stink bomb' });
      done();
    });
  });

  it('can click to resume', function (done) {
    browser.visit('/', function () {
      browser.clickLink('Resume', function () {
        expect(browser.text('title')).to.include('Resume');
        done();
      });
    });
  });

  it('can click on a portfolio link', function (done) {
    browser.visit('/', function () {
      browser.clickLink('Chalk Schools', function () {
        expect(browser.text('title')).to.include('Chalk Schools');
        expect(browser.text('body')).to.include('A digital workflow system');
        done();
      });
    });
  });

  it('can click on a header link', function (done) {
    browser.visit('/', function () {
      browser.clickLink('Side Projects', function () {
        expect(browser.text('title')).to.include('Side Projects');
        expect(browser.text('body')).to.include('LAUNCH Hackathon 2015');
        expect(browser.text('body')).to.include('Internal Room 77 hackathon');
        done();
      });
    });
  });

  it('can click to hcd page', function (done) {
    browser.visit('/', function () {
      browser.clickLink('Resume', function () {
        browser.clickLink('human-centered design', function () {
          expect(browser.text('title')).to.include('Human-Centered Design');
          done();
        });
      });
    });
  });

  it('can click to donations page', function (done) {
    browser.visit('/', function () {
      browser.clickLink('Resume', function () {
        browser.clickLink('my donations pledge', function () {
          expect(browser.text('title')).to.include('Donations Pledge');
          done();
        });
      });
    });
  });

  it('routes street view page', function (done) {
    browser.visit('/office-street-view', function () {
      expect(browser.text('h1')).to.equal('Office Street View');
      done();
    });
  });
});
