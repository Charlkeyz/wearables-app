import { CartContext } from '../../context/cart context/Cart-context'
import Button from '../Button/button'
import CartItems from '../cart-items/cart-items'
import './cart-dropdown.style'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, EmptyMessage, CartItem } from './cart-dropdown.style'


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckOutPage = () => {
        navigate("/checkout");
    }
    return(
        <CartDropdownContainer>
            <CartItem>
                {
                    cartItems.length ? (
                        cartItems.map((items)=> 
                        <CartItems key={items.id} cartItem={items}/>)
                    ) : (
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                    )
                }
                
            </CartItem>

            <Button onClick={goToCheckOutPage}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown