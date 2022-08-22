import { useSelector } from "react-redux";

const Total = () => {

    const total = useSelector(state=>state.pr.total); 
    const userInfo =useSelector(state=>state.lr.userInfo);
    return ( 
        <div>
            <h1>Total</h1><span>User:{ userInfo}</span><hr/>
            <h5>Total = {total}</h5>
        </div>
     );
}
 
export default Total;