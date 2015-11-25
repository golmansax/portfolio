import path from 'path';
import cachifyStatic, { cachify } from 'connect-cachify-static';

const middleware = cachifyStatic(path.resolve(__dirname, '..', 'public'));
export { middleware as assetMiddleware, cachify as getAsset };
