import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg"


// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-14 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={35}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white  py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!  </p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide> 
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}

                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque nulla quis? Facilis possimus reprehenderit asperiores!</p>
                 <Avatar 
                 alt="avatar of Jese"
                 img={proPic}
                 rounded
                 className='w-18 mb-4'
                 />   
                 <h5 className='text-lg font-medium'>Mark Ping</h5>
                 <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>


      </Swiper>
        </div>
    </div>
  )
}

export default Review