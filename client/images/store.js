const images = {};

export function loadImages(newImages) {
  Object.assign(images, newImages);
}

export function getImage(path) {
  if (!(path in images)) {
    throw new Error(`Image has not been loaded: ${path}`);
  }

  return images[path];
}
