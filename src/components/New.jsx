import NavBar from "./NavBar.jsx";
import Template1 from './templates/Template1.jsx'
import NewCSS from '/public/styles/New.module.css'

export default function New() {


    return(
        <div className={NewCSS.page}>
            <NavBar />
            {/* <form className={NewCSS.NewPageform} onSubmit={(e) => e.preventDefault()}> */}
            <Template1 
            id = {1}
            />
            
                {/* <div className={NewCSS.buttons}>
                    <div className={NewCSS.submit_div}>
                        
                    </div>
                </div>
            </form> */}

        </div>
    )

}