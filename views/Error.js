import React from 'react';

// นี่คือไฟล์ views/error.jsx
const Error = ({ message, error }) => {
  return (
    <html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <h1>{message}</h1>
        <h2>{error.status}</h2>
        <pre>{error.stack}</pre>
      </body>
    </html>
  );
};

export default Error;
