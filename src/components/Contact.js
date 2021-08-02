import React, { useState } from 'react'
import styled from 'styled-components'
import shake from '../assets/shake.svg'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Thanks i'll get back to you")
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <Wrapper id='contact'>
             <div className="main-container">
                <div className="left">
                    <img src={shake} alt="" />
                </div>
                <div className="right">
                    <h3>Would love to hear from you</h3>
                    <form method="POST" data-netlify='true' 
                    onSubmit={handleSubmit} 
                    className='contact-form'
                    >
                        <label>Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='input-field' type="text" name='name' required/>

                        <label>Email</label>
                        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' type="text" required />

                        <label>Message</label>
                        <textarea  value={message} onChange={(e) => setMessage(e.target.value)} className='input-field' name="message"></textarea>

                        <input className='submit-btn' type="submit" value='Send it' />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.div`
padding-top: 40px;
height: 100vh;
width: 100%;
background-color: #C26868;
color: #fafafa;

.left {
    display: none;
}

h3 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 10px;
}

.contact-form {
    display: block;
    max-width: 600px;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 50px;
}

.contact-form label {
    line-height: 2.7em;
}

.contact-form textarea {
    min-height: 100px;
    font-size: 14px;
}

.input-field {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    font-size: 14px;
}

.submit-btn {
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: black;
    border: none;
}

@media (min-width: 992px) {

    .main-container {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    grid-column-gap: 14px;
}

    .left {
    display: grid;
    padding-top: 90px;
}
}
`
