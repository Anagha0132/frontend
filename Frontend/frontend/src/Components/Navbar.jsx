import { Button, AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <AppBar color='inherit'>
                <Toolbar>
                    <Typography variant='h6' color='secondary'>Employee Details</Typography>&nbsp;&nbsp;
                    <Link to='/Add'>
                        <Button variant='contained' color='secondary'>Add</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to='/View'>
                        <Button variant='contained' color='secondary'>View</Button>
                    </Link>&nbsp;&nbsp;
                </Toolbar>


            </AppBar><br /><br />
        </div>
    )
}

export default NavBar
