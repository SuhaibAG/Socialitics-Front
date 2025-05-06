import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const UserNode = ({user, adminToken}) =>{
    
    

    return(
        <div className="border-black border-2 rounded-lg">
            <p className="m-2">Username: {user.name}</p>
            <p className="m-2">Email: {user.email}</p>
            <p className="m-2">ID:  {user.firebaseUID}</p>

        </div>
        
    )
}
export default UserNode