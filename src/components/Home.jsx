import HomeCSS from "/public/styles/Home.module.css";
import { useContext } from "react";
import { UserContext } from "./user_context/UserContext.jsx";
import NavBar from "./NavBar.jsx";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className={HomeCSS.page}>
      <NavBar />
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
