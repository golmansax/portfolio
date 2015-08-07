import { cachify } from 'connect-cachify-static';

const registeredImages = ['/static/navbar-icon.png'];

export default function getImagesData() {
  const imageData = {};
  registeredImages.forEach((image) => imageData[image] = cachify(image));

  return imageData;
}
