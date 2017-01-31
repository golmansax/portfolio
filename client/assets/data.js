import { getAsset } from '../../server/asset_utils';

const registeredAssets = [
  '/static/navbar-icon.png',
  '/static/portrait_2017-01-27.jpg',
  '/static/book-booster_kcbs.mp3',
];

export default function getAssetsData() {
  const assetData = {};
  registeredAssets.forEach((asset) => (assetData[asset] = getAsset(asset)));

  return assetData;
}
