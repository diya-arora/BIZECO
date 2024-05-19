import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '@/component/Nav'
import SideNav from '@/component/SideNav'
import Wrapper from '@/component/Wrapper'
import NextTopLoader from 'nextjs-toploader';


const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'BIZECO', // change name 
  description: "Website for BIZECO student chapter.", // change name 
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className=''>
      <body className={poppins.className}>
        <NextTopLoader
         color='#23ff00'
         showSpinner = {false}
         />
        <canvas id='Matrix'></canvas>
        <Wrapper>
        {children}
        </Wrapper>
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
        <script defer async src="https://unpkg.com/css-doodle@0.17.2/css-doodle.min.js"></script>
      </body>
    </html>
  )
}
