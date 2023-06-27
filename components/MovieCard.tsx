import React from 'react'

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard:React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw" >
      <img className="coursor-pointer object-cover transition duration
      shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0
      delay-300 w-full h-[13vw]"
       src={data.thumbnailUrl} alt='Thumbnail'/>
             <div className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[1vw]
        group-hover:translate-x-[1vw]
        group-hover:opacity-100
      ">
        <img src={data.thumbnailUrl} alt="Movie" className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        " />
                <div className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          ">
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
            <h1>hi</h1>
            </div>
            <div>
              hi
            </div>
           
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <h2>hello</h2>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieCard