import React from 'react';
import Image from 'next/image'; // Importa Image desde next/image en lugar de usar <img> estándar
import '../styles/globals.css';

const Header = () => {
    return (
        <div className="header z-90">
            <div className='flex justify-between p-[20px] items-center'>
                <Image src='/Kyndryl_logo.png' alt='logos' width={120} height={10} /> {/* Ajusta width y height según tus necesidades */}
                <Image src='/Dian_logo.png' alt='logos' width={160} height={20} /> {/* Ajusta width y height según tus necesidades */}
            </div>

            <div className='gradient-line'></div>
        </div>
    );
}

export default Header;
