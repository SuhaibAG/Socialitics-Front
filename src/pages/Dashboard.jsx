import { getAuth, onAuthStateChanged } from "firebase/auth"
import { use, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { app } from "../firebase/firebase"
const Dashboard = () =>{
    const navigate = useNavigate()
    const [user, setUser] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
            console.log(user);
            if(!user){
                navigate("/login")
            }
            setUser(!!user);
        });

        return() => {
            unsubscribe();
        };


    }, [user, setUser, navigate])

    function handleClick(){
        const auth = getAuth(app);
        auth.signOut();
    }
    console.log(user)
    return(
           <div>
                <h1>Dashboard</h1>
                <button onClick={handleClick}>sign out</button>
           </div>
    )
}
export default Dashboard;