import { useDispatch } from "react-redux";
import { downQuantity, removeCart, upQuantity } from "../../../redux/slices/cartSlicer";

function CartItem({data}){
    const dispatch = useDispatch()
    const handleIncrementQuantity = (id) => {
        dispatch(upQuantity({id: id}))
    }
    const handleDecrementQuantity = (id) => {
        dispatch(downQuantity({id: id}))
    }
    const handleRemoveItem = (id) => {
        dispatch(removeCart({id: id}))
    }

    return (
        <div>
            <p>{data.name}</p>
            <p>{data.value}</p>

            <div>
                <span>quantidade: </span>
                <button onClick={() => handleDecrementQuantity(data.id)}>diminuir quantidade</button>
                <span>{data.quantity}</span>
                <button onClick={() => handleIncrementQuantity(data.id)}>aumentar quantidade</button>
            </div>

            <button onClick={() => handleRemoveItem(data.id)}>remover</button>
        </div>
    )
}

export default CartItem;