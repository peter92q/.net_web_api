import { useEffect, useState } from "react";
import Catalogue from "./app/components/catalogue/Catalogue";
import { Product } from "./app/types/product";
import Navbar from "./app/components/layout/navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
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
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
      .then(response=>response.json())
      .then(data=>setProducts(data))
  },[])

  return (
    <>
     <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
       <Container>
        <Catalogue products={products}/>
       </Container>
     </ThemeProvider>
    </>
  );
}

export default App;
