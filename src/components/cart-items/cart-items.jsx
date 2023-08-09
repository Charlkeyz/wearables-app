import './cart-items.scss'


const CartItems = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return(
        <div className='class-item-container'>
            {/* <img src={imageUrl} alt={`${name}`} /> */}
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <span className='price'>{quantity} * ${price}</span>
            </div>
        </div>
    )
}
export default CartItems