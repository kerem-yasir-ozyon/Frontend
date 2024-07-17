import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../assets/data';

const BlogDetails = () => {
    const params = useParams();
    const parametre = params.blogId
  return (
    <div className='detay'>
        <img src={posts[parametre-1].picture} alt="" />
        <h3>{posts[parametre-1].title}</h3>
        <p>{posts[parametre-1].text}</p>
        <Link to="/ank/blog">Postlara geri dönmek için tıklayınız.</Link>
    </div>
  )
}

export default BlogDetails