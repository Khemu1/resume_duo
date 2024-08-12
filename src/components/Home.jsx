import HomeCSS from "/public/styles/Home.module.css";
import { useContext } from "react";
import { UserContext } from "./user_context/UserContext.jsx";

export default function LargestContentfulPaint() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className={HomeCSS.page}>
      <div className={HomeCSS.navBar}>{user}</div>
    </div>
  );
}
