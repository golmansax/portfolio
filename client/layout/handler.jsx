import React, { Component }  from 'react';
import { renderToString }  from 'react-dom/server';
import LayoutHead from './head';
import LayoutInlineData from './inline_data';
import { cachify } from 'connect-cachify-static';
console.log(LayoutInlineData);

function getContent(children) {
  return renderToString(children);
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
