import { getAsset } from '../../server/asset_utils';

const registeredAssets = [
  '/static/navbar-logo.png',
  '/static/portrait_2018-06-13.jpg',
  '/static/book-booster_kcbs.mp3',
];

export default function getAssetsData() {
  const assetData = {};
  registeredAssets.forEach((asset) => (assetData[asset] = getAsset(asset)));

  return assetData;
}
