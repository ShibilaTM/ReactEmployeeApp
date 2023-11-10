import React from 'react'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className='nav'>
      <AppBar position="static" style={{background:'black'}}>
        <Toolbar>
        <PermIdentityOutlinedIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit" className='navbtn'><Link to={'/form'}  style={{color:'white', textDecoration:'none'}}>Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
