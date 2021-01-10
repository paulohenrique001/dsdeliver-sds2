import ProductsCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
}

function ProductsList({ products } : Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(products => (
                    <ProductsCard product={products} key={products.id} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;