import { CartContext } from '../../context/cart context/Cart-context'
import Button from '../Button/button'
import CartItems from '../cart-items/cart-items'
import './cart-dropdown.scss'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckOutPage = () => {
        navigate("/checkout");
    }
    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {
                    cartItems.map((items)=> 
                    <CartItems key={items.id} cartItem={items}/>)
                }
            </div>

            <Button onClick={goToCheckOutPage}>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown