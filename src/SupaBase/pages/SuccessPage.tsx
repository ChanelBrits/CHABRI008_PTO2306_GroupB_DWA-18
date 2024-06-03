import  supabase  from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const SuccessPage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser()
            .then((value) => {
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData();
    }, [])

    async function signOutUser () {
        await supabase.auth.signOut();
        navigate("/login")
    }

    return (
        <div>
            {Object.keys(user).length !== 0 ? 
            <>
                <h1>Success</h1>
                <button onClick={() => signOutUser()}>Sign Out</button>
            </>
            : 
            <>
            <h1>User not logged in</h1>
            <button onClick={() => { navigate("/login") }}>Go back home!</button>
            </>
            }
            
        </div>
    );
};

export default SuccessPage;