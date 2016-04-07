/* eslint-disable prefer-arrow-callback */

import chai, { expect } from 'chai';
import Browser from 'zombie';
import { isProduction } from '../server/config';
import { initI18n } from '../server/my_i18n';
import StinkBomb from 'stink-bomb';
import dirtyChai from 'dirty-chai';

import { describe } from 'global-mocha';
import { before, beforeEach, afterEach, it } from 'arrow-mocha/es5';

// Expose React so we don't need to import it for JSX
global.React = require('react');

chai.use(dirtyChai);
StinkBomb.configure({ raise: true });
const MY_PORT = 3001;
Browser.localhost('golmansax.com', MY_PORT);

let server;
if (isProduction()) {
  server = require('../server/prod_server').default;
} else {
  server = require('../server/dev_server').default;
}

describe('server', function () {
  let browser;
  let serverInstance;

  before(() => initI18n());

  beforeEach(() => {
    serverInstance = server.listen(MY_PORT);
    browser = new Browser();
  });

  afterEach(() => {
    serverInstance.close();
  });

  describe('when starting from index', function () {
    beforeEach(() => browser.visit('/'));

    it('routes root page to portfolio', () => {
      expect(browser.text('title')).to.equal('Holman Gao');
      expect(browser.text('h1')).to.equal('Holman Gao');
      expect(browser.text('body')).to.include('Chalk Schools');
      StinkBomb.create('2016-06-01', { message: 'Sample stink bomb' });
    });

    describe('when clicking on a portfolio link', () => {
      beforeEach(() => browser.clickLink('Chalk Schools'));

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Chalk Schools');
      });

      it('has the right content', () => {
        expect(browser.text('body')).to.include('A digital workflow system');
      });
    });

    describe('when clicking on a header link', () => {
      beforeEach(() => browser.clickLink('Side Projects'));

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Side Projects');
      });

      it('has the expected projects', () => {
        expect(browser.text('body')).to.include('LAUNCH Hackathon 2015');
        expect(browser.text('body')).to.include('Internal Room 77 hackathon');
      });
    });

    describe('when clicking to resume', () => {
      beforeEach(() => browser.clickLink('Resume'));

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Resume');
      });

      describe.skip('when clicking to hcd page', function () {
        beforeEach(() => {
          this.timeout(9000);
          return browser.clickLink('human-centered design');
        });

        it('has the right title', () => {
          expect(browser.text('title')).to.include('Human-Centered Design');
        });
      });

      describe('when clicking to impact pledge page', () => {
        beforeEach(() => browser.clickLink('My Impact Pledge'));

        it('has the right title', () => {
          expect(browser.text('title')).to.include('Impact Pledge');
        });
      });

      describe('when clicking to street view', () => {
        beforeEach(() => {
          browser.clickLink('More');
          return browser.clickLink('Fun teams page');
        });

        it('has the right title', () => {
          expect(browser.text('title')).to.include('Office Street View');
        });
      });
    });
  });

  describe('when starting from side projects page', function () {
    beforeEach(() => browser.visit('/side-projects'));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Side Projects');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('Navigate through an office');
    });
  });

  describe.skip('when starting from community page', function () {
    beforeEach(() => {
      this.timeout(20000);
      return browser.visit('/in-community');
    });

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Efforts in Community');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('donate money every year');
    });
  });

  describe('when starting from work page', function () {
    beforeEach(() => browser.visit('/work'));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Work');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('Spearheaded a database redesig');
    });
  });

  describe('when starting from a project page', function () {
    beforeEach(() => browser.visit('/side-projects/quarry'));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Quarry');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('Autocomplete as a service');
    });
  });

  describe('when starting from resume page', function () {
    beforeEach(() => browser.visit('/resume'));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Resume');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('2011 ACM-ICPC World Finals');
    });
  });
});
