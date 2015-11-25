import path from 'path';

const HTML_DIR = path.resolve(__dirname, '..', 'public');

export function getStaticHtmlPath(myPath) {
  if (myPath.indexOf('html') >= 0) {
    return `${HTML_DIR}${myPath}`;
  }

  return `${HTML_DIR}${myPath}/index.html`.replace(/\/+/g, '/');
}
