import { PropTypes } from 'react';
import Image from '../images/image';

const renderImage = (images, url, routeName) => {
  if (Array.isArray(images)) {
    return images.map((image, index) => (
      <div className='projects-image__grid' key={index}>
        <Image src={image} href={url} routeName={routeName} />
      </div>
    ));
  }

  if (images.url) {
    return <Image url={images.url} href={url} routeName={routeName} />;
  }

  return <Image src={images} href={url} routeName={routeName} />;
};

const ProjectsImage = ({ image, url, routeName }) => (
  <div className='projects-image'>{renderImage(image, url, routeName)}</div>
);

ProjectsImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.shape({ url: PropTypes.string.isRequired }),
  ]).isRequired,
  routeName: PropTypes.string,
  url: PropTypes.string,
};

export default ProjectsImage;
