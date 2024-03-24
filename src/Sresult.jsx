import React from 'react'

function Sresult(prps) {
    const Img = `https://source.unsplash.com/600x400/?${prps.name}`;
  return (
  <>
   
    <img src={Img} alt='not-show' />
  </>

  )
}

export default Sresult