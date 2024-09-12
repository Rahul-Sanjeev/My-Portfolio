import React from 'react'
import logo from "../assets/RSLogo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { FaGithubAlt } from 'react-icons/fa'

export default function NavBar() {
    return (
        <>
            <nav className='flex items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-center'>
                    <a href='/' aria-label='Home'>
                        <img src={logo} className='mx-1' width={110} height={30} alt='Logo'></img>
                    </a>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href='https://www.linkedin.com/in/rahulsanjeev/' target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'>
                        <FaLinkedinIn />
                    </a>
                    <a href='https://github.com/Rahul-Sanjeev' target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'>
                        <FaGithubAlt />
                    </a>
                    <a href='https://www.instagram.com/rahul._.sanjeev/' target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Instagram'>
                        <FaInstagram />
                    </a>
                    <a href='https://www.facebook.com/rahul.sanjeev.18' target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Facebook'>
                        <FaFacebookF />
                    </a>
                </div>
            </nav>
        </>
    )
}
