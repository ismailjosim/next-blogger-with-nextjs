import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/blog.module.css'

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;


    return (
        <div className={styles.blog}>
            <Image
                className={styles.img}
                src='/blogImg01.jpg'
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <div className={styles.blog_body}>
                <h2>Now You see {slug}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, natus sint! Rem nihil error hic corporis itaque dicta eum assumenda, doloremque ex alias. Est, et dolorum sunt eius, odio ex quidem dolores sit ipsam labore laborum harum fugit autem distinctio laudantium, expedita quos! Possimus rem sapiente quibusdam doloremque nostrum, facilis est delectus explicabo aperiam? Quibusdam earum sequi veniam culpa quos cumque excepturi ipsa, veritatis ratione quis inventore quod minus quam? Provident, sint possimus! Cupiditate fugit iusto incidunt repellat similique non reprehenderit, dicta ad at tenetur recusandae ut! Architecto nam totam dicta exercitationem expedita, beatae quod saepe aspernatur veritatis quia tenetur.
                </p>
            </div>
        </div>
    )
}

export default Slug
