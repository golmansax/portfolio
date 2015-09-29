import { expect } from 'chai';
import Browser from 'zombie';
import server from '../server';
import StinkBomb from 'stink-bomb';

import { beforeEach, afterEach, it } from 'arrow-mocha/es5';

StinkBomb.configure({ raise: true });

describe('server', function() {
  let browser;

  beforeEach(() => {
    const port = 3001;
    this.timeout(9000);
    this.server = server.listen(port);
    browser = new Browser({ site: 'http://localhost:' + port });
    return browser.visit('/');
  });

  afterEach(() => {
    this.server.close();
  });

  it('routes root page to portfolio', () => {
    expect(browser.text('title')).to.equal('Holman Gao');
    expect(browser.text('h1')).to.equal('Holman Gao');
    expect(browser.text('body')).to.include('Chalk Schools');
    StinkBomb.create('2016-06-01', { message: 'Sample stink bomb' });
  });

  it('can click on a portfolio link', (done) => {
    browser.clickLink('Chalk Schools').then(() => {
      expect(browser.text('title')).to.include('Chalk Schools');
      expect(browser.text('body')).to.include('A digital workflow system');
    }).then(done);
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

    describe('when clicking to hcd page', () => {
      beforeEach(() => browser.clickLink('human-centered design'));

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Human-Centered Design');
      });
    });

    describe('when clicking to donations page', () => {
      beforeEach(() => browser.clickLink('my donations pledge'));

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Donations Pledge');
      });
    });

    describe('when clicking to street view', () => {
      beforeEach(() => {
        browser.clickLink('More');
        return browser.clickLink('Fun teams page')
      });

      it('has the right title', () => {
        expect(browser.text('title')).to.include('Office Street View');
      });
    });
  });
});
