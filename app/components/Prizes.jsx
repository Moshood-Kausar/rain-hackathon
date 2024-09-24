import Image from 'next/image'
import React from 'react'
import gold from '@/app/assets/gold-medal.png'
import silver from '@/app/assets/silver-medal.png'
import bronze from '@/app/assets/bronze-medal.png'
import trophy from '@/app/assets/trophy.png'

export default function Prizes(){
  return (
    <section id='prizes' className="px-4 md:px-10 lg:px-20 mb-[14px] mx-5">
        <h2 className="w-fit text-center text-dark mx-auto text-medium text-[18px] md:text-[32px] font-medium flex items-center">Prizes</h2>
        {/* <p className='text-dark text-center text-sm md:text-base'>Our whooping prices; one of the best hackhaton ever</p> */}
        <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-7 gap-4 md:gap-11 w-fit mx-auto'>
        <div className='order-0 md:order-1 lg:order-0 bg-primary rounded-lg max-w-[383px] px-3.5 xl:px-5 py-4 h-[calc(100%_-_16px)] md:h-[calc(100%_-_40px)] xl:h-[calc(100%_-_60px)] xl:my-auto'>
                <div className='mb-2 flex items-center justify-start gap-2 text-xl'>
                        <Image src={silver} alt='Silver Medal' width={180} height={143} className='w-[40px] md:w-[60px] h-auto' />
                        1st Runner Up
                </div>
                <div className='mt-[15px] mb-4 md:mb-[50px] md:px-5 text-dark'>
                    <h3 className='flex mx-auto w-fit items-center text-center text-[24px] md:text-[32px] font-medium'>750,000 <span className='ml-2 text-xl'>Naira</span></h3>
                    <p className="text-sm">Yes! You read that well. 750 thousand naira for the second team and that could also be YOUR team.</p>
                </div>
        </div>
        <div className="order-0 xl:order-1 p-[2px] md:col-span-2 xl:col-span-1 mx-auto w-fit h-fit rounded-lg bg-gradient-to-r from-[#95772B] via-[#4C4E1C] to-[#666828]">
            <div className="bg-white bg-[url('/stars.png')] border-2 rounded-md max-w-[380px] px-3.5 md:px-6">
                <div className='mt-[14px] mb-2 flex items-center justify-between'>
                    <div className={`flex items-center gap-2 text-xl font-medium`}>
                        <Image src={gold} alt='Gold Medal' width={180} height={143} className='w-[40px] md:w-[60px] h-auto' />
                        <p className="gradient-to-br from-[#95772B] to-[#666828] text-[16px]">Winner!</p>
                    </div>
                    <div>
                        <Image src={trophy} alt='Trophy' width={295} height={253} className='w-[90px] md:w-[98px] h-auto' />
                    </div>
                </div>
                <div className='mb-5 md:mb-[66px] md:px-5'>
                    <h3 className='flex mx-auto w-fit items-center text-center text-[24px] md:text-[32px] font-medium'>1,000,000 <span className='ml-2 text-xl'>Naira</span></h3>
                    <p className="text-sm">Yes! You read that well. 1 million naira for the first team and that could be YOUR team.</p>
                </div>
            </div>
        </div>
        <div className=' md:order-1 lg:order-0 bg-primary rounded-lg max-w-[383px] px-3.5 xl:px-5 py-4 h-[calc(100%_-_16px)] md:h-[calc(100%_-_40px)] xl:h-[calc(100%_-_60px)] xl:my-auto'>
            <div className='mb-2 flex items-center justify-start gap-2 text-xl'>
                <Image src={bronze} alt='Bronze Medal' width={180} height={143} className='w-[40px] md:w-[60px] h-auto' />
                    2nd Runner Up
            </div>
            <div className='mt-[15px] mb-4 md:mb-[50px] md:px-5 text-dark'>
                <h3 className='flex mx-auto w-fit items-center text-center text-[24px] md:text-[32px] font-medium'>500,000 <span className='ml-2 text-xl'>Naira</span></h3>
                <p className="text-sm">Yes! You read that well. 500 thousand naira for the second team and that could also be YOUR team.</p>
            </div>
        </div>
        </div>
    </section>
  )
}
