import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../store/productSlice";

const Cart = () => {
    const dispatch = useDispatch();

    const handleDelete=(index, price)=>{
            let obj={index, price}
            dispatch(deleteItem(obj));
    }

    const carts=useSelector(state=>state.pr.carts);
    const userInfo=useSelector(state=>state.lr.userInfo);

    return ( 
        <div>
            <h1>Cart</h1><span>User:{userInfo}</span><hr/>
            {carts.map((item, index)=>(
                    <h4 key={index}>{`${item.itemName}   $${item.itemPrice}`}    
                            <span onClick={()=>handleDelete(index, item.itemPrice)} style={{color:"red", cursor:"pointer"}}> {"       "}x</span>
                    </h4>
                ))}
        </div>
     );
}
 
export default Cart;