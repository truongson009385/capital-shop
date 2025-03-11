import React from 'react'

type Props = {
    id: number,
    name: string,
    slug: string,
    image: string
}

const CategoryCard = (props: Props) => {
  return (
    <div className='group relative overflow-hidden shadow-md transition-all duration-200 hover:shadow-xl'>
      <div className='relative aspect-auto w-full overflow-hidden'>
        <img 
          src={props.image} 
          alt={props.name}
          className='h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-125'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end text-center p-4'>
        <h3 className='text-2xl font-semibold text-white mb-2'>{props.name}</h3>
        <a href='' className='text-orange-500 underline underline-offset-1'>Shop now</a>
      </div>
    </div>
  )
}

export default CategoryCard;