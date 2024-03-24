import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Superchat</span>
      <div className="user">
        <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
        <span>Basith</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar