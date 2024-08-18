import HomeCSS from "/public/styles/Home.module.css";
import NavBar from "./NavBar.jsx";
import { useGetAllTemplates } from "/src/hooks/user.js";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [allTemps, setAllTemps] = useState();

  const {
    loading : useGetAllTemplatesLodaing,
    error : useGetAllTemplatesErrors,
    handleUseGetAllTemplates,
} = useGetAllTemplates();


  React.useEffect(function(){
    async function getAllTemplates() {
      const resultData = await handleUseGetAllTemplates()
      console.log(resultData)
      setAllTemps(resultData)
    }
    getAllTemplates()
  }, [])

if (allTemps){
  // allTemps.map(item => {
  //   return(
  //     console.log('hello')
  //   )
  // })
  console.log(allTemps.resultData[0]._id)
  // console.log(typeof(allTemps))
}



// const cards = allTemps.resultData.map(slide => {
//   return (
//     <SwiperSlide key={slide._id} className="swiper-slide">
//       here is the swiper
//   </SwiperSlide>
//   )
// })        




  return (
    <div className={HomeCSS.page}>
      <NavBar />







      <div className="swiper-container">
          <Swiper
            slidesPerView={1}

            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
              { allTemps && allTemps.resultData.map((slide, index) => (
            <SwiperSlide key={slide._id} className={HomeCSS.swiper_slide}>
                <Link to={`/SHOW?id=${slide._id}`}> <span> template {index + 1} </span> </Link>
            </SwiperSlide>
          ))}
              </Swiper>
              <div className="swiper-pagination"></div>
      </div>










      <div className={HomeCSS.body}>
        <div className={HomeCSS.section}><span>What is this :</span>this is an intermediate project in the codeclause internship.</div>

        <div className={HomeCSS.section}><span>About :</span>this is a full stack resume builder web application with a login form which means that <br />
        you can add, delete and modify resumes with different templates and different users</div>

        <div className={HomeCSS.skillsWrap}>Skills used :
          <div className={HomeCSS.skills}>
            <div className={HomeCSS.HTMLshill}>HTML</div>
            <div className={HomeCSS.HTMLshill}>CSS</div>
            <div className={HomeCSS.HTMLshill}>JavaScript</div>
            <div className={HomeCSS.HTMLshill}>React</div>
            <div className={HomeCSS.HTMLshill}>Vite</div>
            <div className={HomeCSS.HTMLshill}>tailwind</div>
          </div>
        </div>

        <div className={HomeCSS.section}><span>edit Extra :</span>originally what I was asked to do was a resume builder with HTML, CSS and javaScript <br />
        but I said why don't I take it as far as I can and learn new skills in the way <br /> 
        ( knowing that I had another three projects to do within one month ) <br />
        </div>

      </div>
    </div>
  );
}
