const HomePage = () => {
  return (
    <>
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="relative h-full bg-gradient-to-br from-primary to-secondary p-4">
          <div className="h-[66px]" />
          <picture className="absolute top-0 right-0 bottom-0 left-0">
            <source srcSet="./public/bg-profile.webp" type="image/webp" />
            <img className="h-full w-full object-cover" src="./public/bg-profile.webp" alt="" />
          </picture>
          <picture className="absolute top-0 right-0 bottom-0 left-0 z-10">
            <source srcSet="./public/ellipse.webp" type="image/webp" />
            <img className="h-full w-full object-cover" src="./public/ellipse.webp" alt="" />
          </picture>

          <h1>Renato</h1>
        </div>

        <div className="p-4">
          <div className="h-[66px]" />

          <div>
            <h2>Renato Soca Ramirez</h2>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus animi inventore cumque,
              veniam laboriosam facere ab consectetur nisi eius dolore temporibus ea cupiditate illum dolorem molestias
              fugit quae harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, expedita delectus.
              Minima repudiandae quasi adipisci voluptas eos repellendus. Labore veritatis nesciunt ipsam architecto
              optio aliquam voluptatem corporis dolores similique. Quis? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus qui sapiente, exercitationem ad nam reprehenderit. Molestias amet sit natus
              error reprehenderit? Suscipit sapiente molestias atque tempore officiis similique vero voluptates?
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center justify-center rounded-lg bg-[#141821] px-10 py-8 transition-[scale] hover:scale-105">
              YouTube
            </div>
            <div className="flex items-center justify-center rounded-lg bg-amber-200 px-10 py-8 transition-[scale] hover:scale-110">
              YouTube
            </div>
            <div className="flex items-center justify-center rounded-lg bg-amber-200 px-10 py-8 transition-[scale] hover:scale-110">
              YouTube
            </div>
            <div className="flex items-center justify-center rounded-lg bg-amber-200 px-10 py-8 transition-[scale] hover:scale-110">
              YouTube
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
