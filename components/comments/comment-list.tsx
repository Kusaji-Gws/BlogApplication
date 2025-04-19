import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Prisma } from '@prisma/client'

type CommentListProps = {
    comments: Prisma.CommentGetPayload<{
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    imageUrl: true
                }
            }
        }
    }>[]
}
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <div className='space-y-8'>
            {
                comments.map((comments) => (
                    <div key={comments.id} className='flex gap-4'>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={comments.author.imageUrl || ""} />
                            <AvatarFallback>{comments.author.name}</AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                            <div className='mb-2'>
                                <span className='font-medium'>
                                    {comments.author.name}
                                </span>
                                <span className='text-sm ml-2'>
                                    {comments.createdAt.toDateString()}
                                </span>

                            </div>
                            <p>{comments.body}</p>

                        </div>
                    </div>

                ))
            }


        </div>
    )
}

export default CommentList