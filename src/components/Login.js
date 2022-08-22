import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/loginSlice";

const Login = () => {

    const users=useSelector(state=>state.lr.users);
    const dispatch=useDispatch();
    
    const handleUser=(user)=>{
        //console.log(user);
        dispatch(addUser(user));

    }
   
    return ( 
        <div>
            <h1>Users</h1>
            {users.map((user,index)=>(
                <h4 onClick={()=>handleUser(user)} className="item" key={index}>{user}</h4>
            ))}
        </div>
     );
}
 
export default Login;