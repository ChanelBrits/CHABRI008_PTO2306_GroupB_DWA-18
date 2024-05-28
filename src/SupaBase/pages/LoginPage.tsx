import supabase from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import styled from "@emotion/styled";
import {Box, Paper, Typography} from "@mui/material"



const LoginContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
})

const AuthBox = styled(Paper)({
    padding: '1.25rem',
    maxWidth: '25rem',
    width: '100%',
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)', 
    borderRadius: '0.5rem',
    backgroundColor: '#1a2121',
})

const StyledTypography = styled(Typography)({
    color: "#dde4e4",
    textAlign: "center"
})

const LoginPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event) => {
            if (event === "SIGNED_IN") {
                navigate("/home")
            } else {
                navigate("/login")
            }
        })
    }, [])

    
    return (
        <LoginContainer>
            
            <AuthBox>
            <StyledTypography variant="h4">Sign in to NovaCast</StyledTypography>
            <Auth 
                supabaseClient={supabase}
                providers={[]}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#52f4ff",
                                brandAccent: "#00C9D3",
                                brandButtonText: '#2b3232',
                                inputText: 'darkgray'
                                
                            }
                        }
                    }
                }}
            />
            </AuthBox>
        </LoginContainer>
    );
};

export default LoginPage;