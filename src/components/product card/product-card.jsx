import './product-card.scss'
import Button, { BUTTON_TYPE_CLASS } from '../Button/button';
import { CartContext } from '../../context/cart context/Cart-context';
import { useContext } from 'react';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItemsToCart} = useContext(CartContext)

    const addProductsToCart = () => addItemsToCart(product)
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button  buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductsToCart}>Add to cart</Button>
        </div>
    )
}
export default ProductCard