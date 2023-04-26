import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Navbar />
            <div className='md:w-1/2 md:p-0 mx-auto w-full px-6'>
                <Searchbar />
            </div>
        </main>
    )
}
