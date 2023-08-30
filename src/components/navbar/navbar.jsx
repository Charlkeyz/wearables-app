import { Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import './navbar-styled.jsx'
import { useContext } from "react";
import { UserContext } from "../../context/user context/Usercontext";
import { signOutUser } from "../../API's/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart context/Cart-context";
import { NavLink, NavLinks, NavigationContainer, LogoContainer } from "./navbar-styled.jsx";


const Navbar = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    
        
    return(
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className = "logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                { currentUser ?
                (<NavLink as='span' onClick={signOutUser}>
                    SIGN OUT
                </NavLink>)
                : (<NavLink to='/sign-in'>
                    SIGN IN
                </NavLink>)
                }
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
    )
};
export default Navbar;