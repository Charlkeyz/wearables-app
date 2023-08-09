import { CartContext } from '../../context/cart context/Cart-context'
import Button from '../Button/button'
import CartItems from '../cart-items/cart-items'
import './cart-dropdown.scss'
import { useContext } from 'react'


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {
                    cartItems.map((items)=> 
                    <CartItems key={items.id} cartItem={items}/>)
                }
            </div>

            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown