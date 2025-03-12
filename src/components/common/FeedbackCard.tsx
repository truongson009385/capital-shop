import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export default function FeedbackCard() {
  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
        <h3 className='text-center text-3xl font-bold mb-7'>Customer Testimonial</h3>
        <p className='text-center mb-7 text-base/7 tracking-wide'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam mollitia tenetur ducimus, earum, dolores, provident consequatur similique suscipit eum molestias doloribus ullam omnis? Earum labore dignissimos delectus illo eveniet.
        </p>
        <div className="flex items-center gap-3">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
                <h4 className='font-medium text-sm'>Title content</h4>
                <p className='font-bold text-md text-gray-600'>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    </div>
  )
}