import path from 'path';
import cachifyStatic, { cachify } from 'connect-cachify-static';

export const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const middleware = cachifyStatic(PUBLIC_DIR, {
  match: /\.(js|css|svg|eot|woff|ttf|cur|png|gif|jpg|mp3)$/,
});
export { middleware as assetMiddleware, cachify as getAsset };
