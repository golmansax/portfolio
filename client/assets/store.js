const assets = {};

export function loadAssets(newAssets) {
  Object.assign(assets, newAssets);
}

export function getAsset(path) {
  if (!(path in assets)) {
    throw new Error(`Asset has not been loaded: ${path}`);
  }

  return assets[path];
}
