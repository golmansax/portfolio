import React from 'react';
import Container from '../shared/container';
import Pdf from '../shared/pdf';

const URL = 'https://docs.google.com/viewer?' +
  'srcid=0BzLh8cg8kVzCV1U4dU9hTVRYSVU&pid=explorer&efh=false' +
  '&a=v&chrome=false&embedded=true';

const Resume = () => (
  <Container>
    <h1>Resume</h1>
    <Pdf url={URL} />
  </Container>
);

export default Resume;
