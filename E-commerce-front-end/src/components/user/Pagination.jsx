import React from 'react';
import Button from '../common/Button.jsx';

function Pagination() {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      <Button variant="secondary">Previous</Button>
      <Button variant="primary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">Next</Button>
    </div>
  );
}

export default Pagination;