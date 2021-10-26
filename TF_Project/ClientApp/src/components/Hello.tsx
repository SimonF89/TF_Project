import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const Hello = () => (
  <div>
    <input type="text" />
    <Button>Submit</Button>
  </div>
);

export default connect()(Hello);