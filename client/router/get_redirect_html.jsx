import { PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const Redirect = ({ redirectUrl }) => (
  <html lang='en-US'>
    <head>
      <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
      <meta httpEquiv='refresh' content={`0;url=${redirectUrl}`} />
      <link rel="canonical" href={redirectUrl} />
    </head>
  </html>
);

Redirect.propTypes = {
  redirectUrl: PropTypes.string.isRequired,
};

export default function getRedirectHtml(redirectUrl) {
  const html = renderToStaticMarkup(<Redirect redirectUrl={redirectUrl} />);
  return `<!DOCTYPE html>${html}`;
}
