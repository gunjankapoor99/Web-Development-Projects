import React, {useState} from 'react';
import {AppBar,Tabs, Tab, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setvalue] = useState()
    return <div>
        <AppBar sx={{backgroundColor: '#232930'}} position='sticky'>
            <Toolbar>
                <Typography>Book Store<LibraryBooksIcon /></Typography>
                <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
                    <Tab linkComponent={NavLink} to="/add" label='Add Book'/>
                    <Tab linkComponent={NavLink} to="/about" label='About Us'/>
                    <Tab linkComponent={NavLink} to="/books" label='Books'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
}

export default Header;