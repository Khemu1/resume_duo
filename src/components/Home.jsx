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
    </div>
  );
}
