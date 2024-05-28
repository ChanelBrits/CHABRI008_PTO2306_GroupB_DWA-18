import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const supabaseUrl = "https://nfolbbvdpxzptcosnulz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mb2xiYnZkcHh6cHRjb3NudWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTgxMzQsImV4cCI6MjAzMTY5NDEzNH0.fIPcNYkJ7Bi2hYEQRLuKLmwQeCQqWzqxCc3ZCiX1D2Q"
const supabase = createClient(supabaseUrl, supabaseKey);

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