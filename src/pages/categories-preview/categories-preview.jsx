import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../context/category context/category-context'
import CategoryPreview from '../../components/Category-preview/category-preview'

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title.id} title={title} products={products}/>
                }
                     
            )}
        </Fragment>
    )
}
export default CategoriesPreview