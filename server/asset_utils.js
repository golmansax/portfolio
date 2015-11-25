import path from 'path';
import cachifyStatic, { cachify } from 'connect-cachify-static';

export const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const middleware = cachifyStatic(PUBLIC_DIR);
export { middleware as assetMiddleware, cachify as getAsset };
