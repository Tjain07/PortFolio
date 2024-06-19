import { SparklesIcon, StarIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { title } from 'process';
import React from 'react';

interface Props{
    company:string;
    image:string;
    role:string;
    desc:string;
}

const ExpeirenceCard = ({company,image,role,desc}:Props) => {
  return (
    <div className='m-2 hover:bg-gray-700 transtion-all duration-300 rounded-lg'>

        <div className='border-2 p-4 border-gray-700 rounded-xl h-[400px]'>
            <Image 
            src={`${image}`}
            alt={company}
            width={70}
            height={70}
            className='lg:rounded mx-auto mt-[2rem]'
            />
            <div>
                <SparklesIcon className='w-[6rem] h-[6rem] text-white opacity-15 fixed'/>
            </div>
            <p className='text-[15px] text-white opacity-65 mt-[3rem] text-center'>
                {desc}
            </p>
            <div>
                <SparklesIcon className='w-[6rem] right-0 h-[6rem] text-white opacity-15 fixed'/>
            </div>
            <h1 className='text-[20px] text-center text-white mt-[2rem] font-medium '>
                {company}
            </h1>
            <p className='text-yellow-400 text-[18px] text-center mb-[3rem] '>
                {role}
            </p>
        </div>
    </div>
  )
}

export default ExpeirenceCard;