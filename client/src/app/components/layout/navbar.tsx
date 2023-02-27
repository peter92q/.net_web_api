import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

const navbar = ({setDarkMode, darkMode}: Props) => {
  return (
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant='h6' color='#fff7f7ed'>
                Cstore
            </Typography>
            <IconButton 
              onClick={()=>setDarkMode(prev=>!prev)}
              sx={{ 
              fontSize: "25px",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center' 
                }}>
              {darkMode ? (<DarkMode sx={{ fontSize: "25px" }} />)
              :
              (<LightMode sx={{ fontSize: "25px", fill: '#fff'}} />)}
        </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default navbar;