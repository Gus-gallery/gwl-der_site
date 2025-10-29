import React from 'react'
import BackgroundImg from './BackGroundImg'

const BodyLanding = () => {
  return (
    <div className>
      <BackgroundImg />
      <div className="font-regular flex items-center justify-center min-h-screen p-2 text-center -mt-15">
        <h2 className="text-lg text-primary opacity-100">
          Handstitched leather goods made in Copenhagen by Gustav Werdelin.
        </h2>
      </div>
    </div>
  )
}

export default BodyLanding
