import { useEffect } from "react";
import { useSelector } from "react-redux";
import { adminAuthReducer } from "../redux/admin/reducer";



function Protected(){
    const user= useSelector((state)=>state.adminAuthReducer)
    useEffect(()=>{
        
    },[user])
    return(
        <div>
            { user.isLogged ? <HomeAdmin/>:<navigate to="/adminlogin" replace={true}/> }
        </div>
    )
}
export default Protected