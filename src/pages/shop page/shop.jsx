import './shop.scss'
import { useContext } from 'react'
import { ProductsContext } from '../../context/product context/Product-context'
import ProductCard from '../../components/product card/product-card'

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return(
        <div className='product-container'>
            {
                products.map((product)=> 
                (
                    <ProductCard key={product.id} product={product}/>
                )
                )}
        </div>
    )
}
export default Shop