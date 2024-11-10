import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Cookie Delight
      </Link>
      <ul className={styles.navLinks}>
        <li><Link href="/" className={styles.navLink}>Home</Link></li>
        <li><Link href="/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  )
}