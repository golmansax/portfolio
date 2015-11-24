import getStaticHtml from './get_static_html';

export default function RouterRoute(req, res) {
  res.send(getStaticHtml(req.url));
}
