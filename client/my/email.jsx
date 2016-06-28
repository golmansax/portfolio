import { PropTypes } from 'react';

const MyEmailContent = () => (
  <span>
    holm
    <span className='my-email__crap'>crap</span>
    an
    <span className='my-email__crap'>crap</span>
    @
    <span className='my-email__crap'>crap</span>
    gol
    <span className='my-email__crap'>crap</span>
    mans
    <span className='my-email__crap'>crap</span>
    ax
    <span className='my-email__crap'>crap</span>
    .com
  </span>
);


const MyEmail = ({ link }) => {
  if (link) {
    return <a href='mailto:holman@golmansax.com'><MyEmailContent /></a>;
  }

  return <MyEmailContent />;
};

MyEmail.defaultProps = {
  link: false,
};

MyEmail.propTypes = {
  link: PropTypes.bool.isRequired,
};

export default MyEmail;
