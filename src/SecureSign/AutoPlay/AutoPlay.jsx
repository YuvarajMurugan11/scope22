import React from 'react'
import Auto from '../../assets/Final.mp4'

const AutoPlay = () => {
  return (
    <video  autoPlay muted loop width="650"
      style={{ borderRadius: '12px',paddingLeft:"2px" }} >
      <source src={Auto} type='video/mp4' />
    </video>
  )
}

export default AutoPlay