import React from 'react';
import Container from '../shared/container';
import Pdf from '../shared/pdf';

const DOC_ID = '0BzLh8cg8kVzCa093RmtkYkFoZG8';
const URL = 'https://docs.google.com/viewer?' +
  `srcid=${DOC_ID}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;

const Resume = () => (
  <Container>
    <h1>Resume</h1>
    <Pdf url={URL} />
  </Container>
);

export default Resume;
