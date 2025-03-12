import Image from 'next/image'
import React from 'react'
import ImageArticle from '@/assets/img/item-cate.jpg'

export default function ArticleItem() {
  return (
    <div className='group'>
        <a href='' className='block h-[350px] mb-5'>
            <Image className='w-full h-full object-cover' src={ImageArticle} alt='' />
        </a>
        <span className='text-gray-600 font-medium line-clamp-1'>Fashion Tips</span>
        <a href="" className='block my-3'>
            <h3 className='text-xl font-semibold line-clamp-2 transition-all duration-300 ease-in-out group-hover:text-red-500'>
                Vogue is Ultimate Guide To Autumn/ Winter 2019 Shoes
            </h3>
        </a>
        <p className='line-clamp-2 mb-3 text-gray-500'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est aliquam ex commodi quod fugit expedita ratione, aut enim, nisi totam sapiente voluptatem voluptates harum labore officiis doloribus nostrum. Expedita, nam!
        </p>
        <a href="" className='underline text-black font-medium transition-all duration-300 ease-in-out hover:tracking-wide'>
            Read more
        </a>
    </div>
  )
}