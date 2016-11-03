/* eslint-disable no-console */

import fs from 'fs-extra';
import path from 'path';
import { getAsset, PUBLIC_DIR } from '../server/asset_utils';

const IGNORED_ASSETS = new Set();

['assets', 'static'].forEach((dir) => {
  const files = fs.readdirSync(path.resolve(PUBLIC_DIR, dir));
  files.forEach((file) => {
    const oldPath = `/${dir}/${file}`;
    if (IGNORED_ASSETS.has(oldPath)) {
      return;
    }

    const cachedPath = getAsset(oldPath);
    const oldFile = `${PUBLIC_DIR}${oldPath}`;
    const newFile = `${PUBLIC_DIR}${cachedPath}`;

    fs.move(oldFile, newFile, (error) => {
      if (error) { throw error; }
      console.log(`Cached ${oldPath}`);
    });
  });
});
