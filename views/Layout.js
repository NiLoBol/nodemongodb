import React from 'react';

// นี่คือไฟล์ views/layout.jsx (หรือชื่อไฟล์ที่คุณต้องการ)
const Layout = ({ title, children }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
