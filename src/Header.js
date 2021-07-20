import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";



// MenuIcon = 드로우바



export default function CustomizedInputBase() {

  return (

<div className="root">

<Paper className="root">
      <IconButton className="iconButton" aria-label="menu">
        <MenuIcon /> 
      </IconButton>

      <InputBase
        className="input"
        placeholder="Search Maps"
        inputProps={{ 'aria-label': 'search maps' }}
      />
      <IconButton type="submit" className="iconButton" aria-label="search">
      
      <SearchIcon />

      </IconButton>

      <Divider className="divider" orientation="vertical" />

  

    </Paper>

    

</div>





  );
}