const Circles = () => {
  return (
    <>
      <div className='absolute top-16 left-0 right-0 bottom-0 z-[-1] blur-3xl'>
        <div className='bg-sky-500/60 w-[35rem] h-[35rem] absolute rounded-full left-[10%] top-[0%] z-[-1] circle1'></div>
        <div className='bg-blue-500/80 w-[35rem] h-[35rem] absolute rounded-full left-[30%] top-[30%] z-[-2] circle2'></div>
        <div className='bg-[#B887FD]/70 w-[35rem] h-[35rem] absolute rounded-full left-[50%] top-[0%] z-[-3] circle3'></div>
      </div>
    </>
  )
}

export { Circles }