import React from 'react'

export default function Navbar() {
    return (
        <header className="header">
            <div className="mid">
                <div className='first_half'>
                    <img src={require('../assets/l1.png')} className='logo_img' alt="" />
                    <ul className="btn">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>
                <div className="right">
                    <button className="navbar">Call Us Now</button>
                    <button className="navbar">Email Us</button>
                </div>

            </div>

        </header>
    )
}
