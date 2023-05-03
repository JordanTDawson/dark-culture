import React from 'react';

const Message = ({ text }) => (
  <span style={{ display: 'inline-block', padding: '0.5rem', backgroundColor: 'green', color: 'white', borderRadius: '0.25rem' }}>
    {text}
  </span>
);

export default Message;
