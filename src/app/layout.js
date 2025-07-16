import { Inter } from 'next/font/google'
import './globals.css'
// import ClientLayout from './components/ClientLayout'
import ClientLayout from './components/clientlayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HichTrip - Travel Planning App',
  description: 'Discover, save, and book amazing travel experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}