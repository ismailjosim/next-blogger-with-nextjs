
import Link from 'next/link'
import styles from '../styles/blog.module.css'

const Blog = () => {


    return (
        <div className={styles.all_blogs}>
            <div className={styles.blog_item}>
                <h3>
                    <Link href='/blogs/dynamic blog post one'>Welcome to blog 01</Link>
                </h3>
            </div>
            <div className={styles.blog_item}>
                <h3>
                    <Link href='/blogs/dynamic blog post Two'>Welcome to blog 02</Link>
                </h3>
            </div>
            <div className={styles.blog_item}>
                <h3>
                    <Link href='/blogs/dynamic blog post Three'>Welcome to blog 03</Link>
                </h3>
            </div>
            <div className={styles.blog_item}>
                <h3>
                    <Link href='/blogs/dynamic blog post Four'>Welcome to blog 04</Link>
                </h3>
            </div>
            <div className={styles.blog_item}>
                <h3>
                    <Link href='/blogs/dynamic blog post Five'>Welcome to blog 05</Link>
                </h3>
            </div>
        </div>


    )
}

export default Blog
