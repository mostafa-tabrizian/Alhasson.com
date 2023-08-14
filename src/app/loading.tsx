const LoadingHome = () => {
   return (
      <div
         className={`
            fixed left-0 bg-gradient-to-b from-[#0d0735] to-[#070515]
            top-0 w-screen h-screen z-20
            flex items-center justify-center
        `}
      >
         <div>
            <svg
               className='animate-spin h-14 w-14 m-10 text-[#d5ba91]'
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
            >
               <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='9'
                  stroke='currentColor'
                  strokeWidth='3'
               ></circle>
               <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
               ></path>
            </svg>
         </div>
      </div>
   )
}

export default LoadingHome
