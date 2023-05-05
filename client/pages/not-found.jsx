import React from 'react';
import { Button } from 'react-bootstrap';

export default function NotFound() {
  return (
    <div className="message-content">
      <div className="text-center">
        <h3>Uh oh, we could not find the page you were looking for!</h3>
        <Button variant="secondary" href="#catalog" >Return to Catalog</Button>
      </div>
    </div>
  );
}
