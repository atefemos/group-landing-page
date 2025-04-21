import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getPostsStore } from "../store/slices/posts.ts"
import { createDataTree } from "../utils/index.ts"
import { IoArrowForwardOutline } from "react-icons/io5"

const MainPage: React.FC = () => {
  

  return (
    <div>
      <section className='flex flex-col lg:flex-row place-items-center gap-[50px] overflow-hidden py-11 px-8 lg:px-[80px] lg:py-[130px] bg-[radial-gradient(circle,_rgba(67,_69,_112,_1)_3%,_rgba(35,_36,_57,_1)_60%)]'>
        <div className="text-white px-0 lg:px-[50px] py-0 lg:w-1/2 max-w-[450px]">  
        <h1 className="font-title title-fluid mb-8">
            <div className="font-title bg-[linear-gradient(90deg,_rgb(118,167,63)_0%,_rgb(51,143,118)_40%,_rgb(55,141,167)_50%,_rgb(117,152,242)_70%,_rgb(144,118,236)_100%)] bg-clip-text text-transparent [background-size:contain] [-webkit-background-clip:text]">Empowering your business </div>
            with smart tech
          </h1>
          <p className="font-nunito text-fluid leading-[1.5] mb-[30px]">
          In the fast-paced world of tech, the right team can accelerate your growth. Discover how our experts help businesses turn ideas into impactful digital solutions.
        </p>
        <form id="form" autoComplete="off" className="relative flex justify-start">
          <input
            type="email"
            id="email-id"
            name="email_address"
            aria-label="email adress"
            placeholder=""
            required
            className="px-[10px] bg-transparent outline-transparent border-0 border-b-2 border-white/30 mr-[10px] transition-all duration-300 ease-in placeholder:text-[#7598f2] placeholder:opacity-50 placeholder:font-medium"
            onInput="checkEmpty()" />
          <button type="submit" className="btn" aria-label="submit">
            <span>Subscribe</span>
              <IoArrowForwardOutline />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-5 lg:w-1/2">
          <span className="item"
            style={{ "--i": 1 } as React.CSSProperties}
          ></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/274f29ce-0d3f-4ac2-a2aa-f9b7bd188b2a"
          style={{ "--i": 2 } as React.CSSProperties}
          alt="" />
          <span className="item"
            style={{ "--i": 3 } as React.CSSProperties}
          ></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9"
          style={{ "--i": 4 } as React.CSSProperties}
          alt="" />

        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/03e51e1e-9750-45a5-b75e-a1e341d4562a"
          style={{ "--i": 10 } as React.CSSProperties}
          alt="" />
          <span className="item"
            style={{ "--i": 11 } as React.CSSProperties}
          ></span>
          <img className="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe"
            style={{ "--i": 12 } as React.CSSProperties}
            alt="" />
          <span className="item"
            style={{ "--i": 5 } as React.CSSProperties}
          ></span>

          <span className="item"
            style={{ "--i": 9 } as React.CSSProperties}
          ></span>
          <img className="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"
            style={{ "--i": 8 } as React.CSSProperties}
            alt="" />
          <span className="item"
            style={{ "--i": 7 } as React.CSSProperties}
          ></span>
          <img className="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099"
            style={{ "--i": 6 } as React.CSSProperties}
            alt="" />
      </div>
      </section>
    </div>
  )
}

export default MainPage
