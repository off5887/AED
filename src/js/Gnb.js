import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import "../css/common.css";



// MenuIcon = 드로우바



export default function CustomizedInputBase() {

  return (

<div className="gnb">

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

  </Paper>

  


  <div className="menu">

      <div className="button" >
          <div className="icon">내 위치<br/> 주변</div>
      </div>

      <div className="button">
            <div className="icon">길찾기</div>
      </div>

      <div className="button">
            <div className="icon">AED <br/>사용방법</div>
      </div>

      <div className="button">
            <div className="icon">고객센터</div>
      </div>

  </div> 



  <div className="menu"> 
  
      <div className="Weather" > 
        
          <span className= "location"> 경기도 안양</span>

          <div className= "Weather_Info">

              <span className="txt_air" >맑음 </span>
              <span className="txt_temper" >36˚</span>
              <span className="txt_change" > 어제와 같아요 :) </span>
              <span className="txt_bar" > </span>

              <span className="txt_dust" >미세
                <span className="dust_state">
                  좋음
                </span>
              </span>

              <span className="menu_bar" > </span>

          </div>

      </div>

  </div>



  </div> //gnb 박스 마지막 부분





  );
}