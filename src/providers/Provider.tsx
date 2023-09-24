import React, { ReactNode } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})
type ProviderProps = {
    children: ReactNode
}
const Provider = ({ children }: ProviderProps) => {
    return (
        <main>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                {children}
            </ThemeProvider>
        </main>
    )
}

export default Provider