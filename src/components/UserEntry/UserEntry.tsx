import { TextField, Box, Button } from "@mui/material"
import styled from "@emotion/styled";

const ValidationTextField = styled(TextField)({
    margin: "0.5rem",
    '& .MuiInputBase-root': {
        backgroundColor: '#2b3232',
        color: '#dde4e4',
      },

    '& input:valid + fieldset': {
      borderColor: '#dde4e4',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
        borderColor: "#52f4ff !important",
      borderLeftWidth: 4,
      padding: '4px !important', 
    },
  });

  const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 15rem;
`
const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1a2121; 
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 20rem;
    width: 20rem;
`

const StyledButton = styled(Button)`
    background-color: #dde4e4;
    color: #2b3232;
    margin: 1rem;
    border-radius: 2rem;
    &:hover {
        background-color: #52f4ff;
      },
`
  
  export const UserEntry = () => {
    
    return (
        <StyledBox>
            <Wrapper>
                <ValidationTextField
                    label="Email"
                    required
                    variant="outlined"
                    defaultValue="Email"
                    id="validation-outlined-input"
                    InputLabelProps={{
                        style: {
                            color: '#52f4ff',
                        },
                    }}
                />

                <ValidationTextField
                    label="Password"
                    required
                    type="password"
                    variant="outlined"
                    defaultValue="Password"
                    id="validation-outlined-input"
                    InputLabelProps={{
                        style: {
                            color: '#52f4ff',
                        },
                    }}
                />
            </Wrapper>

            <StyledButton variant="contained">Log In</StyledButton>
        </StyledBox>
    )
};