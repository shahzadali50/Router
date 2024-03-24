import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function User() {
    const {name} = useParams();
    const location = useLocation();
    
  return (
    <>
        <h1>My name is {name} </h1>
        <h3>My Current Location is {location.pathname} </h3>
        { location.pathname===`/user/shahzad` ?
        <button onClick={ ()=>alert(`You are awesome `) } >Click me</button> : null}
    </>
  )

  }
export default User