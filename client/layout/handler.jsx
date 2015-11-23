import { renderToStaticMarkup } from 'react-dom/server';
import LayoutHead from './head';
import LayoutInlineData from './inline_data';
import { cachify } from 'connect-cachify-static';

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
        src={cachify('/assets/router_bootstrap.js')}
      />
    </body>
  </html>
);

export default LayoutHandler;
