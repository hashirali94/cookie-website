import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cookie Delight - Handcrafted Cookies',
  description: 'Indulge in our delicious, handcrafted cookies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}