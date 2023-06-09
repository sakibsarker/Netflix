import React from 'react'
import { AiOutlinePlus,AiOutlineCheck } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";
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
            <BsFillPlayCircleFill className="text-black" size={25}/>
            </div>
           <div className="flex flex-col">
           <p className="text-green-400 font-semibold">New <span className="text-white">2023</span></p>
           <div className="flex flex-row gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
           </div>
           <div className="flex flex-row items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
           </div>
           </div>
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            < AiOutlinePlus className="text-white" size={25}/>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieCard