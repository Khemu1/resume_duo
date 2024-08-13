import NavBarCSS from '/public/styles/navBar.module.css'
import logo from '/public/assets/logo.jpeg'
import { UserContext } from './user_context/UserContext';
import { useContext } from 'react';

export default function NavBar() {

    // const [username, setUsername] = useContext(Context)
    const { user } = useContext(UserContext);


    return(
        <div className={NavBarCSS.navBar}>
            <div className={NavBarCSS.navBar_contents}>
                
                <div className={NavBarCSS.logoAndUsername}>
                    <div className={NavBarCSS.logo}>
                        <img src={logo} alt='logo image'></img>
                    </div>
                    <div className={NavBarCSS.username}><h1>{user}</h1></div>
                </div>

                <div className={NavBarCSS.rightContents}>
                    <div className={NavBarCSS.homeButton}>
                        <button>HOME</button>
                    </div>
                    <div className={NavBarCSS.homeButton}>
                        <button>NEW</button>
                    </div>
                    <div className={NavBarCSS.homeButton}>
                        <button>SHOW</button>
                    </div>
                </div>

            </div>
        </div>
    )
}