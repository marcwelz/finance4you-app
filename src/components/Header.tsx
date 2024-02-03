import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Your Title Here
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', maxWidth: 360 }}>
                    <Button variant="contained">Button 1</Button>
                    <Button variant="contained">Button 2</Button>
                    <Button variant="contained">Button 3</Button>
                    <Button variant="contained">Button 4</Button>
                    <Button variant="contained">Button 5</Button>
                </Box>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;