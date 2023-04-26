import Link from 'next/link'
import React from 'react'
import { 
    FaFacebook, 
    FaInstagram,
    FaGithub, 
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa'

export default function Navbar() {
    return (
        <div className='flex justify-around items-center py-4'>
            <div>
                <h1 className='text-red-600 text-3xl font-bold'>MR.X</h1>
                <h6 className='text-gray-800 text-sm font-bold' style={{
                    letterSpacing: '0.9em'
                }}>BLOG</h6>
            </div>
            <div className='space-x-5'>
                <FaFacebook size={17} style={{ display: 'inline' }} />
                <FaInstagram size={17} style={{ display: 'inline' }} />
                <FaLinkedinIn size={17} style={{ display: 'inline' }} />
                <FaTwitter size={17}  style={{ display: 'inline' }} />
                <FaGithub  size={17} style={{ display: 'inline' }} />
            </div>
        </div>
    )
}
