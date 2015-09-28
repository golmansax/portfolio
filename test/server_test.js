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

  it('can click to resume', (done) => {
    browser.clickLink('Resume').then(() => {
      expect(browser.text('title')).to.include('Resume');
    }).then(done);
  });

  it('can click on a portfolio link', (done) => {
    browser.clickLink('Chalk Schools').then(() => {
      expect(browser.text('title')).to.include('Chalk Schools');
      expect(browser.text('body')).to.include('A digital workflow system');
    }).then(done);
  });

  it('can click on a header link', (done) => {
    browser.clickLink('Side Projects', () => {
      expect(browser.text('title')).to.include('Side Projects');
      expect(browser.text('body')).to.include('LAUNCH Hackathon 2015');
      expect(browser.text('body')).to.include('Internal Room 77 hackathon');
    }).then(done);
  });

  it('can click to hcd page', (done) => {
    browser.clickLink('Resume', () => {
      browser.clickLink('human-centered design', () => {
        expect(browser.text('title')).to.include('Human-Centered Design');
      }).then(done);
    });
  });

  it('can click to donations page', (done) => {
    browser.clickLink('Resume', () => {
      browser.clickLink('my donations pledge', () => {
        expect(browser.text('title')).to.include('Donations Pledge');
      }).then(done);
    });
  });

  it('can click to street view', (done) => {
    browser.clickLink('Resume', () => {
      browser.clickLink('More');
      browser.clickLink('Fun teams page', () => {
        expect(browser.text('title')).to.include('Office Street View');
      }).then(done);
    });
  });
});
