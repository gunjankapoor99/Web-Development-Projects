import React, {useState} from 'react';
import {AppBar,Tabs, Tab, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setvalue] = useState();
    return <div>
        <AppBar sx={{backgroundColor: '#232930'}} position='sticky'>
            <Toolbar>
                <Typography>Book Store<LibraryBooksIcon /></Typography>
                <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
                    <Tab LinkComponent={NavLink} to="/" label='Home'/>
                    <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
                    <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                    <Tab LinkComponent={NavLink} to="/add" label='Add Book'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
}

export default Header;