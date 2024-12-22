import { BookOpen, Mail, Menu, Phone } from 'lucide-react'
import './App.css'
import MountFuji from "./assets/mt-fuji.jpg"

function App() {

  return (
    <div
      style={{
        backgroundImage: `url(${MountFuji})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className='min-h-dvh w-full relative flex flex-col text-white'>
      <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black/75' />
      <nav className='w-[90%] z-10 mx-auto py-4 flex justify-between items-center bg-transparent'>
        <h1 className='font-bold text-2xl'>JapanTravels</h1>
        <div className='flex items-center space-x-8 *:cursor-pointer'>
          <ul className='flex items-center gap-6 text-lg font-normal'>
            <li className='flex items-center gap-1'><Phone /> 800-422-446</li>
            <li className='flex items-center gap-1'><BookOpen /> Brochure</li>
            <li className='flex items-center gap-1'><Mail /> Contact</li>
          </ul>
          <Menu size={32} />
        </div>
      </nav>
      <div className='w-[75%] mx-auto gap-4 flex flex-1 z-10 text-center flex-col items-center justify-center'>
        <h2 className='text-4xl text-[#42525d] font-semibold'>Mount Fuji</h2>
        <h1
          className="text-[10rem] text-white/75 font-extrabold uppercase leading-none tracking-wider"
        >
          Japan
        </h1>
        <button
          style={{
            boxShadow: '0 1px 6px 0 #FFAD09FF'
          }}
          className='uppercase px-4 font-semibold text-3xl border border-orange-500 shadow-md py-2'>Explore</button>
      </div>
    </div>
  )
}

export default App
