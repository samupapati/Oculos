import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/slices/cartSlicer";

function ProductItem({data}){
    const dispatch = useDispatch();

    const handleAddCart = (id, name, value) => {
        dispatch(addCart({id: id, name: name, value: value}))
    }

    return(
        <div>
            <p>{data.name}</p>
            <p>{data.value}</p>
            <button onClick={() => handleAddCart(data.id, data.name, data.value)}>add cart</button>
        </div>
    )
}

export default ProductItem;