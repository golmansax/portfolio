import { PropTypes } from 'react';
import Fragments from './fragments';

const FragmentsBlock = ({ data }) => {
  if (data.left) {
    return (
      <div className='clearfix'>
        <div className='fragment-block__left'>
          <Fragments fragments={data.left} />
        </div>
        <div className='fragment-block__right'>
          <em>
            <Fragments fragments={data.right} />
          </em>
        </div>
      </div>
    );
  }

  return <Fragments fragments={data} />;
};

FragmentsBlock.defaultProps = { data: [] };
FragmentsBlock.propTypes = { data: PropTypes.object.isRequired };

export default FragmentsBlock;
