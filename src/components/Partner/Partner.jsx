import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Partner = () => {
    return (
        <div className='cta-block relative lg:h-[120px] h-[180px]'>
            <div className='bg-cta w-full h-full absolute top-0 left-0 z-[-1]'>
                <Image 
                    width={5000} 
                    height={5000} 
                    className='w-full h-full object-cover' 
                    src='/images/cta/bg-cta1.png' 
                    alt='Background CTA' 
                />
            </div>

            <div className='container flex items-center justify-between max-lg:flex-col max-lg:justify-center gap-6 h-full'>
                <div className='heading5 max-lg:text-center text-white text-2xl lg:text-3xl font-semibold ml-4'>
                    Looking for a first-class business consultant?
                </div>
                <Link 
                    className='mr-4 button-main rounded-full hover:bg-[#FF6347] hover:text-white bg-[#FF4500] text-white px-9 py-3 transition-all transform hover:scale-105' 
                    href='/'
                >
                    Get A Contact
                </Link>
            </div>
        </div>
    );
};

export default Partner;
