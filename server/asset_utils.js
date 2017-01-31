import path from 'path';
import cachifyStatic, { cachify } from 'connect-cachify-static';
import { getPortfolioPath } from '../client/url_utils';

export const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const middleware = cachifyStatic(PUBLIC_DIR, {
  match: /\.(js|css|svg|eot|woff|ttf|cur|png|gif|jpg|mp3)$/,
});

function getAsset(asset) {
  const cachedAsset = cachify(asset);
  return getPortfolioPath(cachedAsset);
}

export { middleware as assetMiddleware, getAsset };
