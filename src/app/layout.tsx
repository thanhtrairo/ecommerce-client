import { Urbanist } from 'next/font/google'

import Navbar from '~/components/navbar'
import Footer from '~/components/footer'
import { ModalProvider, ToastProvider } from '~/providers'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
