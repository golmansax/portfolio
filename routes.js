(function (exports) {
  'use strict';

  exports.index = function (req, res) {
    res.render('index');
  };

  exports.hcd = function (req, res) {
    var link = 'https://docs.google.com/viewer?' + [
      'srcid=0BzCKqkqhnFJQRFFyTDZFQ1R6OGs',
      'pid=explorer',
      'efh=false',
      'a=v',
      'chrome=false',
      'embedded=true'
    ].join('&');

    res.render('hcd', { link: link });
  };
})(exports);
