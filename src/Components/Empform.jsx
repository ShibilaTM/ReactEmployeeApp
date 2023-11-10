import {Button, Grid, TextField, Typography} from '@mui/material'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import React from 'react'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import './Home.css'

const Empform = () => {
  
  const avatarStyle = {backgroundColor:'#15bfa0'}
  const buttonStyle ={margin:'15px 0'}
  return (
    <Grid>
      <Paper  className='paper'>
        <Grid align="center">
        <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
              <h2>Employee Form</h2>
        </Grid>
        <TextField label='Name'  variant="standard" fullWidth required></TextField>
        <TextField style={{marginTop:'18px'}} label='Designation'  variant='standard' type='password' fullWidth required></TextField>
        <TextField style={{marginTop:'18px'}} label='location'  variant="standard" fullWidth required></TextField>
        <TextField style={{marginTop:'18px'}} label='salary'  variant='standard' type='password' fullWidth required></TextField>
              <Button className='formbtn' type='submit' color='primary' variant='contained' style={buttonStyle} fullWidth><Link to={'/dash'}  style={{color:'white', textDecoration:'none'}}>Submit </Link></Button>
              <br /><br />
      <Typography className='link'>
        <Link to={'/dash'} style={{color:'black'}}>Back to Employee Dashboard</Link>
      </Typography> 
             
      </Paper>
    </Grid>
  )
}

export default Empform


