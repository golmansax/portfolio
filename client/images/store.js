const images = {};

export function loadImages(newImages) {
  Object.assign(images, newImages);
}

export function getImage(path) {
  if (!images.hasOwnProperty(path)) {
    throw new Error(`Image has not been loaded: ${path}`);
  }

  return images[path];
}
