/* eslint-disable prefer-arrow-callback */

import chai, { expect } from 'chai';
import nock from 'nock';
import Browser from 'zombie';
import StinkBomb from 'stink-bomb';
import dirtyChai from 'dirty-chai';
import { describe } from 'global-mocha';
import { before, beforeEach, afterEach, it } from 'arrow-mocha/es5';
import { isProduction } from '../server/config';
import { initI18n } from '../server/my_i18n';
import { getPortfolioPath } from '../client/url_utils';

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
    nock.disableNetConnect();
    nock.enableNetConnect('golmansax.com:80');
    nock('https://docs.google.com').persist().get(/viewer/).reply(200);
  });

  afterEach(() => {
    serverInstance.close();
    nock.cleanAll();
  });

  describe('when starting from index', function () {
    beforeEach(() => browser.visit(getPortfolioPath('/')));

    it('routes root page to portfolio', () => {
      expect(browser.text('title')).to.include('Software Developer Portfolio | Holman Gao');
      expect(browser.text('h1')).to.include('Holman Gao');
      expect(browser.text('body')).to.include('Chalk Schools');
      StinkBomb.create('2020-06-01', { message: 'Sample stink bomb' });
    });

    describe('when clicking on a portfolio link', () => {
      beforeEach(() => {
        // See this Github issue on how to access window
        // https://github.com/assaf/zombie/issues/1098
        const window = browser.document.defaultView;

        // jsdom doesn't have an implementation for this because they don't do layout.
        // https://github.com/tmpvar/jsdom/issues/1706
        window.HTMLElement.prototype.scrollIntoView = () => null;

        return browser.clickLink('Chalk Schools');
      });

      it('has the right title', () => {
        // We now are redirecting to the project category page
        expect(browser.text('title')).to.include('Work');
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

    /* TODO: transfer this to the other repo
    describe('when clicking to resume', () => {
      beforeEach(() => {
        return browser.clickLink('Resume');
      });

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Resume');
      });

      it('has Resume in the body', () => {
        expect(browser.text('body')).to.include('Resume');
      });
    });
    */
  });

  describe('when starting from side projects page', function () {
    beforeEach(() => browser.visit(getPortfolioPath('/side-projects')));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Side Projects');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('Navigate through an office');
    });
  });

  describe('when starting from work page', function () {
    beforeEach(() => browser.visit(getPortfolioPath('/work')));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Work');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('Spearheaded a database redesig');
    });
  });

  describe('when starting from a project page', function () {
    beforeEach(() => browser.visit(getPortfolioPath('/side-projects/quarry')));

    it('has the right title', () => {
      expect(browser.text('title')).to.include('Quarry');
    });

    it('has the right content', () => {
      expect(browser.text('body')).to.include('Autocomplete as a service');
    });
  });
});
