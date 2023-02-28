import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton, List, ListItem } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

const midLinks = [
  {title: 'catalog', path: '/catalogue'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

const navStyles = {
  color:'#fff7f7ed', 
  typography: 'h8',
  '&.active':{color: 'gray'}
}


const navbar = ({setDarkMode, darkMode}: Props) => {
  return (
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
          <Box display='flex' alignItems='center'>
            <Typography variant='h6' color='#fff7f7ed' 
              component={NavLink} to='/'
              sx={{textDecoration:'none'}}
              >
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
          </Box>
          <List sx={{display: 'flex'}}>
              {midLinks.map(({title,path})=>(
                <ListItem 
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                  >
                  {title.toUpperCase()}
                </ListItem>
              ))}
          </List>
          <Box display='flex' alignItems='center'>
            <IconButton>
            <Badge badgeContent='4' color='info'>
              <ShoppingCart sx={{fill: '#fff'}}/>
            </Badge>
            </IconButton>
            <List sx={{display: 'flex'}}>
                {rightLinks.map(({title,path})=>(
                  <ListItem 
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}
                    >
                    {title.toUpperCase()}
                  </ListItem>
                ))}
            </List>
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default navbar;