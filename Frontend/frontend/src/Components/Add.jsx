import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, Setinput] = useState({ Name: "", Age: "", Dept: "", Salary: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("a", location.state)

  

  const inputHandler  = (e) => {
    Setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3008/update/" +location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })
    }
    else {
      axios.post("http://localhost:3008/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })
    }
  }
  useEffect(() => {
    if (location.state !==null)
      Setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Dept: location.state.val.Dept,
        Salary: location.state.val.Salary
      })
  },[])
  return (
    <div>
          <h1>DETAILS</h1>
      <TextField label="Name" variant='outlined' name='Name' value={input.Name} onChange={inputHandler} /><br /><br />
      <TextField label="Age" variant='outlined' name='Age' value={input.Age} onChange={inputHandler} /><br /><br />
      <TextField label="department" variant='outlined' name='Dept' value={input.Dept} onChange={inputHandler} /><br /><br />
      <TextField label="Salary" variant='outlined' name='Salary' value={input.Salary} onChange={inputHandler} /><br /><br />
          <Button variant='contained' color='inherit' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Add
