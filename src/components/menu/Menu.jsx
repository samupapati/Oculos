import { useSelector } from "react-redux/es/hooks/useSelector";

function Menu(){
    const quantityItemsInCart = useSelector(state => state.cart.quantityItems)

    return (
        <div>
            <h1>menu</h1>
            <span>itens no carrinho: {quantityItemsInCart}</span>
        </div>
    )
}

export default Menu;