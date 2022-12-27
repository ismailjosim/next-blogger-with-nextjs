import Link from 'next/link'
import React from 'react'
import styles from '../styles/navbar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.mainNav}>
            <h2>
                <Link href='/'>NextBlogger</Link>
            </h2>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">blog</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
                <li>
                    <Link href="/login">login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
