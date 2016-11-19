import { isProduction } from '../server/config';

// const ROOT_PATH = isProduction() ? '/portfolio' : '';
// const ROOT_PATH = '/portfolio';
const ROOT_PATH = '';

export const getPortfolioPath = (path) => `${ROOT_PATH}${path}`;
