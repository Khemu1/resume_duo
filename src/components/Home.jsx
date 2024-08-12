import HomeCSS from '/public/styles/Home.module.css';
import { useContext } from 'react';
import { Context } from "../App";

export default function LargestContentfulPaint() {


    const [username, setUsername] = useContext(Context)

    return(
        <div className={HomeCSS.page}>
            <div className={HomeCSS.navBar}>{username}</div>
        </div>
    )
}