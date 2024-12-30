import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [user, setuser] = useState([])
    var navigate=useNavigate()
    axios.get("http://localhost:3008/view")
        .then((res) => {
            setuser(res.data)
               
        })
        

    const delValue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3008/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            
            })
            .catch((error) => console.log(error))
    }
    const updatevalue = (val) => {
        navigate("/add", { state: { val } })
        
    }

  return (
      <div>
          <TableContainer component={Paper}>
              <Table border='2'>
                  <TableHead>
                      <TableRow>
                          <TableCell align="center"><b>Name</b></TableCell>
                          <TableCell align="center"><b>Age</b></TableCell>
                          <TableCell align="center"><b>Department</b></TableCell>
                          <TableCell align="center"><b>Salary</b></TableCell>
                          <TableCell align="center"><b>Delete</b></TableCell>
                          <TableCell align="center"><b>Update</b></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (

                              <TableRow>
                                  <TableCell align="center">{val.Name} </TableCell>
                                  <TableCell align="center">{val.Age}</TableCell>
                                  <TableCell align="center">{val.Dept}</TableCell>
                                  <TableCell align="center">{val.Salary}</TableCell>
                                  <TableCell align="center">
                                      <Button variant='contained' color="secondary" onClick={() => { delValue(val._id) }}>Delete</Button>
                            
                                  </TableCell>
                                  <TableCell align="center">
                                      <Button variant='contained' color="secondary" onClick={() => { updatevalue(val) }}>Update</Button>
                                  </TableCell>

                              </TableRow>
                          )
                      }
                      )}
            
                  
                  </TableBody>
              </Table>
          </TableContainer>

      
    </div>
  )
}

export default View
