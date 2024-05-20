import { createTheme, responsiveFontSizes } from "@mui/material"

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#52f4ff",
        },
        secondary: {
            main: "#E9D731"
        },

    }
})

export default responsiveFontSizes(defaultTheme);