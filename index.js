require('babel-core/register');
require('./server').listen(require('./server/config').PORT);

