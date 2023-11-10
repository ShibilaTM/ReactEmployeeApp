import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <TableContainer sx={{ marginTop: '100px', maxHeight: '400px', maxWidth: '1200px', marginLeft: '80px' }} component={Paper} align='center'>
      <Table aria-label='simple tample' stickyHeader className='table' >
      <TableHead sx={{ backgroundColor: 'purple' }}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val, i) => (
            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{val.id}</TableCell>
              <TableCell align='center'>{val.name}</TableCell>
              <TableCell align='center'>{val.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Dashboard;

