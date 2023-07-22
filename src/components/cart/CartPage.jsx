import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";

function CartPage(){
    const selector = useSelector(state => state.cart);

    return(
        <div>
            <h1>Carrinho</h1>
            {selector.products.map(product => <CartItem data={product}/>)}
            <h2>total: {selector.total}</h2>
        </div>
    )
}

export default CartPage;