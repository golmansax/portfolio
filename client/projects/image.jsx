import { PropTypes } from 'react';

const renderImage = (images) => {
  if (Array.isArray(images)) {
    return images.map((image, index) =>
      <div className='projects-image__grid' key={index}>
        <img src={image} />
      </div>
    );
  }

  return <img src={images} />;
};

const ProjectsImage = ({ image }) => (
  <div className='projects-image'>{renderImage(image)}</div>
);

ProjectsImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
};

export default ProjectsImage;
