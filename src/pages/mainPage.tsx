import React, { useEffect } from "react"
import Person1 from "../assets/images/person1.jpg"
import Person2 from "../assets/images/person2.webp"
import Person3 from "../assets/images/person3.jpeg"
import Person4 from "../assets/images/person4.webp"
import Person5 from "../assets/images/person5.avif"
import Person6 from "../assets/images/person6.jpg"
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5"

const MainPage: React.FC = () => {
  

  return (
    <div>
      <section className='flex flex-col-reverse md:flex-row place-items-center overflow-hidden py-11 px-8 md:px-[80px] md:py-[130px] bg-[radial-gradient(circle,_rgba(67,_69,_112,_1)_3%,_rgba(35,_36,_57,_1)_60%)]'>
        <div className="text-white px-0 md:px-[50px] py-0 md:w-1/2">  
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
            className="px-[10px] w-full bg-transparent outline-transparent border-0 border-b-2 border-white/30 mr-[10px] transition-all duration-300 ease-in placeholder:text-[#7598f2] placeholder:opacity-50 placeholder:font-medium"
            onInput="checkEmpty()" />
          <button type="submit" className="btn" aria-label="submit">
            <span>Subscribe</span>
              <IoArrowForwardOutline />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-5 mb-10 md:w-1/2">
          <span className="item"
            style={{ "--i": 1 } as React.CSSProperties}
          ></span>
        <img
          className="item"
            src={Person1}
          style={{ "--i": 2 } as React.CSSProperties}
          alt="" />
          <span className="item"
            style={{ "--i": 3 } as React.CSSProperties}
          ></span>
        <img
          className="item"
          src={Person2}
          style={{ "--i": 4 } as React.CSSProperties}
          alt="" />

        <img
          className="item"
            src={Person3}
          style={{ "--i": 10 } as React.CSSProperties}
          alt="" />
          <span className="item"
            style={{ "--i": 11 } as React.CSSProperties}
          ></span>
          <img className="item" src={Person4}
            style={{ "--i": 12 } as React.CSSProperties}
            alt="" />
          <span className="item"
            style={{ "--i": 5 } as React.CSSProperties}
          ></span>

          <span className="item"
            style={{ "--i": 9 } as React.CSSProperties}
          ></span>
          <img className="item" src={Person5}
            alt="" />
          <span className="item"
            style={{ "--i": 7 } as React.CSSProperties}
          ></span>
          <img className="item" src={Person6}
            alt="" />
      </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-[20px] w-full min-h-screen overflow-hidden px-[50px] pt-[60px] pb-[20px] bg-[radial-gradient(circle,_rgba(67,69,112,1)_3%,_rgba(35,36,57,1)_60%)]" id="card-container">
        <div className="slider">
          <div className="max-w-[300px] aspect-[3/5] rounded-[15px] m-[20px] overflow-hidden 
         border-t border-l border-white/70 
         shadow-[0_8px_10px_rgba(0,0,0,0.5),_inset_0_2px_2px_rgba(255,255,255,0.2)] 
         cursor-grab" data-tilt>
          <div className="relative h-full grid grid-cols-1 grid-rows-[repeat(9,_1fr)] p-[20px] bg-[rgba(104,104,104,0.5)] select-none content-glow">
            <img className="aspect-[3/2] rounded-[10px] row-[1/5] mb-[20px] select-none object-cover shadow-[0_3px_10px_rgba(0,0,0,0.5)]" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/10088b1a-c0aa-42a9-8dff-1a692eb597d6" alt="" />
            <h1 className="text-[1.2rem] text-white text-center row-[5/6]">Personalized Guidance</h1>
            <p className="text-[1rem] font-normal text-white row-[6/9]">
              Whether you are pursuing a career change, entrepreneurship, or
              personal development, a mentor offers substantial advice and
              support to navigate your unique path.
            </p>
            <button className="btn bg-gradient-to-r from-[#ece9e6] to-[#ece9e6] via-[#ffffff] 
             p-[8px_12px] text-black shadow-[0_0_5px_#eee] outline-0 
             text-[0.9rem] font-normal row-[9/10] m-[4px_auto_8px] cursor-pointer 
             transition-all duration-500 ease-in">
              <span>Learn More</span>
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>
        </div>
        <ul className="flex flex-row justify-center items-center list-none gap-[14px]" id="custom-control">
          <li>
          <IoArrowBackOutline />
        </li>
        <li>
        <IoArrowForwardOutline />   
        </li>
      </ul>
      </section>
    </div>
  )
}

export default MainPage
