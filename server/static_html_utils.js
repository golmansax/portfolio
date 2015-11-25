import path from 'path';

const HTML_DIR = path.resolve(__dirname, '..', 'public');

export function getStaticHtmlPath(myPath) {
  return `${HTML_DIR}${myPath}/index.html`.replace(/\/+/g, '/');
}
