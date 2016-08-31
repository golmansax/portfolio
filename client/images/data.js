import { getAsset } from '../../server/asset_utils';

const registeredImages = [
  '/static/navbar-icon.png',
  '/static/portrait_2016-04-30.jpg',
];

export default function getImagesData() {
  const imageData = {};
  registeredImages.forEach((image) => (imageData[image] = getAsset(image)));

  return imageData;
}
