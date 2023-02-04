import renato from '../assets/renato.png';

const Index = () => {
  return (
    <>
      <section className="relative container mx-auto px-10 pt-24 min-h-screen overflow-hidden flex gap-8 ">
        <svg className="absolute z-10 -top-[3.5rem] left-[22.5%]" width="120" height="120">
          <circle cx="60" cy="60" r="60" fill="#B887FD"/>
        </svg>

        <div className="flex-1 flex flex-col justify-center">
          <h1>Info Personal</h1>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center relative">
          <svg className="blur" width="400" height="400">
            <circle cx="200" cy="200" r="200" fill="#B887FD"/>
          </svg>
          <img className='absolute bottom-[-1rem] w-[50rem] object-cover' src={renato} alt="" />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h2>Sobre mi</h2>
        </div>

        <svg className="absolute -bottom-[3.5rem] left-[72.5%]" width="120" height="120">
          <circle cx="60" cy="60" r="60" fill="#B887FD"/>
        </svg>
      </section>

      <section className="min-h-screen">

      </section>
    </>
  );
}

export default Index;