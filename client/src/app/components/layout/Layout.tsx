import { ReactNode, useState } from "react";
import Navbar from "./navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";

interface Children{
  children: ReactNode;
}

const Layout = ({children}: Children) => {
  const [ darkMode, setDarkMode ] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
      palette: {
          mode: paletteType,
          background: {
            default: paletteType === 'light' ? '#eaeaea' : '#302f2f'
          },
          primary: {
            main: paletteType === 'light' ? '#08b3ecc8' : '#fff7f7ed'
          },
          secondary: {
            main: paletteType === 'light' ? '#08b3ecc8' : '#fff7f7ed'
          }
      }
  })

  return (
    <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
       <Container>
          {children}
       </Container>
    </ThemeProvider>
  )
}

export default Layout