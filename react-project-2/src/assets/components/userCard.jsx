import React from 'react'
import img from "../components/nature.jpg"
import "./userCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-image' src={img} alt="Photo"></img>
        <p id='user-desc' >Description of Shivam</p>
    </div>
  )
}

export default UserCard
