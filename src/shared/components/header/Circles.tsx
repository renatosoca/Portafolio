import './circle.css'

const Circles = () => {
  return (
    <>
      <div className="absolute top-16 right-0 bottom-0 left-0 z-[-1] blur-3xl">
        <div className="circle1 absolute top-[0%] left-[05%] z-[-3] h-[35rem] w-[35rem] scale-105 rounded-full bg-green-400/60" />
        <div className="circle2 absolute top-[0%] right-[05%] z-[-1] h-[35rem] w-[35rem] scale-105 rounded-full bg-blue-500/80" />
        <div className="circle3 absolute top-[75%] left-[50%] z-[-2] h-[35rem] w-[35rem] -translate-1/2 scale-105 transform rounded-full bg-[#B887FD]/85" />
      </div>
    </>
  )
}

export { Circles }
