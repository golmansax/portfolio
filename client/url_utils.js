import { isProduction } from '../server/config';

const ROOT_PATH = isProduction() ? '/portfolio' : '';

export const getPortfolioPath = (path) => `${ROOT_PATH}${path}`;
