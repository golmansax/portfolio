'use strict';

var expect = require('chai').expect;
var Browser = require('zombie');
var server = require('../server');
var StinkBomb = require('stink-bomb');

import { beforeEach, afterEach, it } from 'arrow-mocha/es5';

StinkBomb.configure({ raise: true });

describe('server', function() {
  var browser;

  beforeEach(() => {
    var port = 3001;
    this.timeout(9000);
    this.server = server.listen(port);
    browser = new Browser({ site: 'http://localhost:' + port });
  });

  afterEach(() => {
    this.server.close();
  });

  it('routes root page to portfolio', (done) => {
    browser.visit('/', () => {
      expect(browser.text('title')).to.equal('Holman Gao');
      expect(browser.text('h1')).to.equal('Holman Gao');
      expect(browser.text('body')).to.include('Chalk Schools');
      StinkBomb.create('2016-06-01', { message: 'Sample stink bomb' });
      done();
    });
  });

  it('can click to resume', (done) => {
    browser.visit('/', () => {
      browser.clickLink('Resume', () => {
        expect(browser.text('title')).to.include('Resume');
        done();
      });
    });
  });

  it('can click on a portfolio link', (done) => {
    browser.visit('/', () => {
      browser.clickLink('Chalk Schools', () => {
        expect(browser.text('title')).to.include('Chalk Schools');
        expect(browser.text('body')).to.include('A digital workflow system');
        done();
      });
    });
  });

  it('can click on a header link', (done) => {
    browser.visit('/', () => {
      browser.clickLink('Side Projects', () => {
        expect(browser.text('title')).to.include('Side Projects');
        expect(browser.text('body')).to.include('LAUNCH Hackathon 2015');
        expect(browser.text('body')).to.include('Internal Room 77 hackathon');
        done();
      });
    });
  });

  it('can click to hcd page', (done) => {
    browser.visit('/', () => {
      browser.clickLink('Resume', () => {
        browser.clickLink('human-centered design', () => {
          expect(browser.text('title')).to.include('Human-Centered Design');
          done();
        });
      });
    });
  });

  it('can click to donations page', (done) => {
    browser.visit('/', () => {
      browser.clickLink('Resume', () => {
        browser.clickLink('my donations pledge', () => {
          expect(browser.text('title')).to.include('Donations Pledge');
          done();
        });
      });
    });
  });

  it('can click to street view', (done) => {
    browser.visit('/', () => {
      browser.clickLink('Resume', () => {
        browser.clickLink('More');
        browser.clickLink('Fun teams page', () => {
          expect(browser.text('title')).to.include('Office Street View');
          done();
        });
      });
    });
  });
});
