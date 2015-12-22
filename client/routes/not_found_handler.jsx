import Helmet from 'react-helmet';
import Container from '../shared/container';

const NotFoundHandler = () => (
  <Container>
    <Helmet title='Page not found' />
    <h1 className='not-found-handler__message'>
      We can&rsquo;t find the page you&rsquo;re looking for
    </h1>
  </Container>
);
export default NotFoundHandler;
