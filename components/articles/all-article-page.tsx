import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '../ui/avatar'

const AllArticlePage = () => {
    return (
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card className='group relative overflow-hidden translate-all hover:shadow-lg'>
                <div className='p-6'>
                    <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl'>
                        <Image
                        src={'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww'}
                        alt='blog-image'
                        fill
                        className='object-cover'
                        />
                    </div>
                    <h3 className='text-xl font-semibold'>title</h3>
                    <p className='mt-2'>web development</p>
                    <div className='mt-6 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar>
                                <AvatarImage src=''/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className='text-sm'>Patel mernstack</span>
                        </div>
                        <div className='text-sm'>
        12 feb
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default AllArticlePage