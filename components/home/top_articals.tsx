import React from 'react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { prisma } from '@/lib/prisma'

const TopArticals = async () => {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: 'desc',
    }, include: {
      comments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true
        }

      }

    }
  })
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 3).map((articles) => (
        <Card

          className={cn(
            "group relative overflow-hidden transition-all hover:scale-[1.02]",
            "border border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          )} key={articles.id}>
        
          <div className='p-6'>
            <Link href={`/articles/${articles.id}`}>
              <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl'>
                <Image src={articles.featuredImage}
                  alt="article"
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex items-center gap-3 text-sm text-gray-500 dark:text-gary-400'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src={articles.author.imageUrl || ""} />
                  <AvatarFallback>cn</AvatarFallback>

                </Avatar>
                <span>{articles.author.name}</span>
              </div>
              <h3 className='mt-4 text-xl font-semibold text-gray-900 dark:text-white'>{articles.title}</h3>
              <p className='mt-2 text-gray-600 dark:text-gray-300'>{articles.category}</p>

              <div className='mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
                <span>{articles.createdAt.toDateString()}</span>
                <span>{12}min to read</span>
              </div>
            </Link>
          </div>
        </Card>
      )

      )}

    </div>
  )
}

export default TopArticals