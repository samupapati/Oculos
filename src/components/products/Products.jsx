import { products } from "../../data/products-data"
import ProductItem from "./products-item/Products-item"

function Products(){
    return (
        <div>
            {products.map(product => <ProductItem data={product}/>)}
        </div>
    )   
}

export default Products;