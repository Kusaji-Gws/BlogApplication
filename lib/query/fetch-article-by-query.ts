import { prisma } from "../prisma"

export const fetchArticleQuery=async(searchText:string)=>{
    const articles= prisma.articles.findMany({
        where:{
            OR: [
                {title: {contains: searchText ,mode:'insensitive'} },
                {category:{contains:searchText,mode:'insensitive'}}

            ]
        },
        include:{
            author:{
                select:{
                    name:true,
                    imageUrl:true,
                    email:true
                }
                
            }
        }
    })
    return articles
}