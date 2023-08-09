import './crown-icon.scss'
import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg'
import { CartContext } from '../../context/cart context/Cart-context'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}
export default CartIcon