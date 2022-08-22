import { useSelector, useDispatch } from "react-redux";
import { purchase } from "../store/productSlice";
const Products = () => {

    const items = useSelector(state=>state.pr.products);
    const userInfo=useSelector(state=>state.lr.userInfo)
    const dispatch = useDispatch();
     
    const handleAdd=(e)=>{
        let itemName=e.target.getAttribute("name");
        let itemPrice=e.target.getAttribute("price");
        let obj={itemName, itemPrice};
        dispatch(purchase(obj));
       
    }
    
   
     
  
    return ( 
        <div>
                <h1>Products</h1><span>User:{userInfo}</span><hr/>
                {items.map((item, index)=>(
                    <h4 className="item" name={item.name} price={item.price} onClick={handleAdd} key={index}>{`${item.name}   $${item.price}`}</h4>
                ))}
                
        </div>
     );

}
 
export default Products;