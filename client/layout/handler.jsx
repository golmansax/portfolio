import { PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LayoutHead from './head';
import LayoutInlineData from './inline_data';
import { getAsset } from '../../server/asset_utils';

function getContent(children) {
  return renderToStaticMarkup(children);
}

const LayoutHandler = ({ children }) => (
  <html>
    <LayoutHead />
    <body>
      <div
        id='content'
        className='content'
        dangerouslySetInnerHTML={{ __html: getContent(children) }}
      />
      <LayoutInlineData />
      <script
        type='text/javascript'
        src={getAsset('/assets/router_bootstrap.js')}
      />
    </body>
  </html>
);

LayoutHandler.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutHandler;
