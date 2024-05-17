export default function Cart({ name, img, linkdlind, github }) {
  return (
    <>
      <div className='relative flex w-full max-w-[26rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-lg transform  transition duration-300 hover:scale-105 dark:bg-gray-800'>
        <div className='relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 '>
          <img src={img} alt='ui/ux review check' />
          <div className='absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
        </div>
        <div className='pt-4'>
          <div className='flex items-center justify-center'>
            <h5 className='block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-white'>
              {name}
            </h5>
          </div>
        </div>
        <div className='p-6 pt-3 flex justify-center '>
          <footer className='flex items-end justify-start mt-4 gap-x-4'>
            <a
              href={github}
              className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-card-bg group max-w-fit rounded-xl focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:text-card-bg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-github'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
              </svg>
              GitHub
            </a>
            <a
              href={linkdlind}
              className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-card-bg group max-w-fit rounded-xl focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:text-card-bg '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-link'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9 15l6 -6'></path>
                <path d='M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464'></path>
                <path d='M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463'></path>
              </svg>
              Linkdlin
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
