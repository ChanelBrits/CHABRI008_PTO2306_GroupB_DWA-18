import styled from "@emotion/styled";
import { Box, Typography, ButtonBase } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const textTheme = createTheme({
  typography: {
    fontFamily: "Quicksand, Arial, sans-serif",
  },
});

const StyledBox = styled(Box)({
  backgroundColor: "#0e1515",
  width: "100vw",
  height: "100vh",
  display: "flex",
  color: "white",
});

const LeftSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "2rem",
  width: "50%",
});

const RightSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
});

const StyledLandingImage = styled("img")({
  width: "100%",
  height: "auto",
  padding: "1rem",
});

const StyledButtonBase = styled(ButtonBase)({
  backgroundColor: "#52f4ff",
  borderRadius: "2rem",
  fontSize: "1rem",
  fontWeight: "700",
  width: "15rem",
  height: "3rem",
  marginRight: "1rem",
  marginTop: "2rem",
  color: "#0e1515",
  alignSelf: "center",
});

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={textTheme}>
      <StyledBox>
        <LeftSection>
          <img src="./public/Quicksand.png" alt="Novacast" />
          <Typography variant="h3" gutterBottom>
            Discover. Listen. Shine.
          </Typography>
          <Typography variant="body1">
            Welcome to Novacast, your gateway to the universe of podcasts!
            Whether you're into deep-dive interviews, thrilling stories, or
            insightful discussions, Novacast brings you closer to the voices and
            stories that matter. Discover new favorites, explore diverse genres,
            and immerse yourself in captivating content, all in one sleek and
            user-friendly app.
          </Typography>

          <StyledButtonBase
            onClick={() => {
              navigate("/login");
            }}
          >
            Get Started
          </StyledButtonBase>
        </LeftSection>
        <RightSection>
          <StyledLandingImage
            src="./public/LandingDesign.png"
            alt="Two people sitting with a microphone"
          />
        </RightSection>
      </StyledBox>
    </ThemeProvider>
  );
};
