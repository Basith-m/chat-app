import React from 'react'
import Add from '../img/Icons8_flat_add_image.svg.png'

const Register = () => {
  return (
    <div className='formContainer' >
        <div className="formWrapper">
            <span className="logo">Superchat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:'none'}} type="file" id='file' />
                <label htmlFor="file">
                    <img width={'35px'} src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register