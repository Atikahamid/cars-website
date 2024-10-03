import React from 'react'
import Navbar from './Navbar'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function PageThree() {
    return (
        <div>
            <Navbar />
            <div className="bg1">
                <div class="address">
                    <p>Our mailing address is:</p>
                    <p>152A charbite street</p>
                    <p>Prefer brought ON</p>
                    <p>Phone:705-742-3221</p>
                </div>
                <ul className='three_ul'>
                    <li className="icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook className='in_icon' /></a>
                    </li>
                    <li className="icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram className='in_icon' /></a>
                    </li>
                    <li className="icons">
                        <a href="https://mail.google.com" target="_blank" rel="noreferrer"><MdEmail className='in_icon' /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
