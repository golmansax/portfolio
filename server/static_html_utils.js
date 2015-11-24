import path from 'path';

const HTML_DIRECTORY = path.resolve(__dirname, '..', 'public', 'html');

export function getStaticHtmlPath(myPath) {
  return `${HTML_DIRECTORY}${myPath}/index.html`.replace(/\/+/g, '/');
}
