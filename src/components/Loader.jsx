import React from 'react';

const Loader = () => (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(255,255,255,0.7)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', fontSize: '2rem'
  }}>
    Loading...
  </div>
);

export default Loader;
