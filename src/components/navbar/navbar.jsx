import { Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import './navbar.scss'
import { useContext } from "react";
import { UserContext } from "../../context/user context/Usercontext";
import { signOutUser } from "../../API's/firebase/firebase";
import CartIcon from "../crown-icon/crown-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart context/Cart-context";


const Navbar = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    
        
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
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
    )
};
export default Navbar;