import { Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import './navbar.scss'
import { useContext } from "react";
import { UserContext } from "../../context/user context/Usercontext";
import { signOutUser } from "../../API's/firebase/firebase";


const Navbar = () => {
    const {currentUser} = useContext(UserContext)

    
        
    return(
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrownLogo className = "logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                { currentUser ?
                (<span className="nav-link" onClick={signOutUser}>
                    SIGN OUT
                </span>)
                : (<Link className="nav-link" to='/sign-in'>
                    SIGN IN
                </Link>)
                }
            </div>
        </div>
    )
};
export default Navbar;