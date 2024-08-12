import NavBarCSS from '/public/styles/navBar.module.css'
import { UserContext } from './user_context/UserContext';
import { useContext } from 'react';

export default function NavBar() {

    // const [username, setUsername] = useContext(Context)
    const { user } = useContext(UserContext);


    return(
        <div className={NavBarCSS.navBar}>
            <div className={NavBarCSS.navBar_contents}><h1>{user}</h1></div>
        </div>
    )
}