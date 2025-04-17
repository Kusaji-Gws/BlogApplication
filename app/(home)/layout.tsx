import Navbar from '@/components/home/header/Navbar';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import Home from './page';

const layout =async ({children}:{children:React.ReactNode}) => {
    const user= await currentUser();
  
    if(!user)
        { return <Home/> ;
        }
    const loggedInUser=await prisma.user.findUnique({
        where:{clerkUserId:user.id},
    });
    if(!loggedInUser){
        await prisma.user.create({
            data:{
                name:user.fullName as string,
                clerkUserId:user.id,
                email:user.emailAddresses[0]?.emailAddress,
                imageUrl:user.imageUrl
            },
        });
    }
  return (
    <div>{children}</div>
  )
}

export default layout