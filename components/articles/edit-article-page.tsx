"use client"
import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
import 'react-quill-new/dist/quill.snow.css'
import { createArticle } from '@/actions/create-article'
import type { Articles } from '@prisma/client'
import Image from 'next/image'
import { editArticle } from '@/actions/edit-article'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
type EditArticleProps = {
    article: Articles
}
const EditArticlePage: React.FC<EditArticleProps> = ({ article }) => {
    const [content, setContent] = useState(article.content);
    const [formState, action, isPending] = useActionState(editArticle.bind(null,article.id), { errors: {} });
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("content", content);
        startTransition(() => {
            action(formData);
        })
    }
    return (
        <div className='max-w-4xl mx-auto p-6'>
            <Card>
                <CardHeader>
                    <CardTitle>Create New Article</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='space-y-2'>
                            <Input type='text' name='title' defaultValue={article.title} />
                            {formState.errors.title && <Label className='text-red-400'>{formState.errors.title}</Label>}
                        </div>
                        <div className='space-y-2'>
                            <Label>Category</Label>
                            <select className='flex h-10 w-full rounded-none' name='category' id='category' defaultValue={article.category}>
                                <option value="">Select Category</option>
                                <option value="technology">Technology</option>
                                <option value="programming">Programming</option>
                                <option value="web-development">Web Development</option>
                            </select>
                            {formState.errors.category && <Label className='text-red-400'>{formState.errors.category}</Label>}
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='featuredImage'>featured image</Label>
                            <Input type='file' id='featureImage' name='featuredImage' accept='image/*' />
                            <div className='mb-4'>
                                {
                                   article.featuredImage &&( <img src={article.featuredImage} alt='featured-img' className='w-40 h-32 object-cover rounded-md' />)
                                }
                            </div>

                        </div>
                        <div className='space-y-2'>
                            <Label>Content</Label>
                            <ReactQuill
                                theme='snow'
                                value={content}
                                onChange={setContent} />
                            {formState.errors.content && <Label className='text-red-400'>{formState.errors.content[0]}</Label>}
                        </div>
                        <div className='flex justify-end gap-4'>
                            <Button>Cancel</Button>
                            <Button type='submit' disabled={isPending}>
                                {
                                    isPending ? "Loading ..." : "Edit Article"
                                }
                            </Button>
                        </div>

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default EditArticlePage