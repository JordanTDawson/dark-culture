import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Loader() {
  return (
    <Container className="d-flex align-items-center vh-100">
      <div className="text-center w-100">
        <div className="lds-ring"><div /><div /><div /><div /></div>
      </div>
    </Container>
  );
};
