import getStaticHtml from './get_static_html';

export default function RouterRoute(req, res) {
  getStaticHtml(req.url).then(({ html, redirectLocation }) => {
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else {
      res.status(200).send(html);
    }
  }).catch((error) => {
    res.status(500).send(error.stack.replace(/\n/g, '<br>'));
  });
}
