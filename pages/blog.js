
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])



    return (
        <div className={styles.all_blogs}>
            {
                blogs.map((blog, idx) => <div key={idx} className={styles.blog_item}>
                    <h3>
                        <Link href={`/blogs/${ blog.slug }`}>{blog.title}</Link>
                    </h3>
                </div>
                )
            }
        </div>
    )
}

export default Blog
