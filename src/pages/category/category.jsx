import { useParams } from 'react-router-dom'
import './category.scss'
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../context/category context/category-context';
import ProductCard from '../../components/product card/product-card';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=> {
        setProducts(categoriesMap[category]);
    },[categoriesMap, category]);

    return(
        <div className='category-container'>
            {
                products && products.map((product)=> (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}
export default Category