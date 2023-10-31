import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Center from '@/components/Center'
import Player from '@/components/Player'
import { getSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className=' bg-black h-screen overflow-hidden'>
    <main className='flex'>
      <Sidebar />
      < Center /> 
    </main>
    <div className='sticky bottom-0'>
      < Player />
    </div>
   </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
   props: {
    session,
   },
  };
}
