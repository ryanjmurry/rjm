import React from 'react'
import Snow from './Snow';
import Welcome from './Welcome';

const backgroundStyle = {
  height: '100%',
  background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
  overflow: 'hidden'
}

function HomePage() {
  return (
    <div >
      <Snow />
      <Welcome />
    </div>
  )
}

export default HomePage
