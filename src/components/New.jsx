import NavBar from "./NavBar.jsx";
import Template1 from './templates/Template1.jsx'
import NewCSS from '/public/styles/New.module.css'

export default function New() {


    return(
        <div className={NewCSS.page}>
            <NavBar />
            <Template1 />
            <form className={NewCSS.NewPageform} onSubmit={(e) => e.preventDefault()}>
                <div className={NewCSS.buttons}>
                    <div className={NewCSS.submit_div}>
                        <button name="submit">submit</button>
                    </div>
                </div>
            </form>

        </div>
    )

}