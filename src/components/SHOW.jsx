import showcss from '/public/styles/Show.module.css'
import NavBar from "./NavBar.jsx";
import React, { useState } from 'react';
import { useGetTemplate } from "/src/hooks/user.js";
import Template1 from './templates/Template1.jsx'
export default function SHOW() {


    const [TempData, setTempData] = useState();

    const {
        loading : useGetTemplateLodaing,
        error : useGetTemplateErrors,
        handleUseGetTemplate,
    } = useGetTemplate();


    React.useEffect(function(){
        async function getAllTemplates() {
          const resultData = await handleUseGetTemplate('66bfb4449242b726d50e41f5')
          setTempData(resultData)
        }
        getAllTemplates()
      }, [])
    
    if (TempData){
      // allTemps.map(item => {
      //   return(
      //     console.log('hello')
      //   )
      // })
      console.log(TempData.resultData)
      // console.log(typeof(allTemps))
    }



    return(
        <div className={showcss.page}>
            <NavBar />
            
            { TempData && <Template1 
            id = {1}
            useername = {TempData.resultData.user_name}
            />}

        </div>
    )
}