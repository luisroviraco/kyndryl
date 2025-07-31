import React from 'react';
import Image from 'next/image'; 
import '../styles/globals.css';

const Header = () => {
    return (
        <div className="header z-90">
            <div className='flex justify-between p-[20px] items-center'>
                <Image src='/consultora-logo.png' alt='logos' width={160} height={20} /> 
                <Image src='/entidad-logo.png' alt='logos' width={120} height={20} /> 
            </div>

            <div className='gradient-line'></div>
        </div>
    );
}

export default Header;
