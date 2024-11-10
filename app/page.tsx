import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const cookieImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cookie2-cIyax1PkLQcJuG5zEGVzG1AQiBDzDk.webp",
      alt: "Stack of golden chocolate chip cookies",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cookie.jpg.jpg-yREqONo6UpNoKo9Q0Oj0u17S27nl8L.jpeg",
      alt: "Freshly baked chocolate cookies on baking sheet",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cookie3.jpg-jh9BvppDnTkGPQHXL9LbP2cSSeHw9A.jpeg",
      alt: "Raw cookie dough ready for baking",
    },
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to Cookie Delight</h1>
        <p className={styles.subtitle}>Handcrafted cookies made with love</p>
        <Link href="/contact" className={styles.cta}>Order Now</Link>
      </section>

      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Our Signature Cookies</h2>
        <div className={styles.cookieGrid}>
          {cookieImages.map((img, index) => (
            <div key={index} className={styles.cookieCard}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={300} 
                height={300} 
                className={styles.cookieImage}
              />
              <h3 className={styles.cookieName}>Delicious Cookie {index + 1}</h3>
              <p className={styles.cookieDescription}>Indulge in our mouthwatering, freshly baked cookies.</p>
              <Link href="/contact" className={styles.learnMore}>Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
