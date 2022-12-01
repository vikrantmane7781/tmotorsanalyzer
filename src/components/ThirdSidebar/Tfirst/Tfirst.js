import React from 'react'
import "./Tfirst.css";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Usericon from "../../imgres/usericon.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Tfirst() {

  const notifyt=()=>{
    toast('Sorry this feature is not available yet!')
    
  }
  return (
    <div className='t__first'>
          <div className='search__container'>
        <IconButton size="large" aria-label="search" color="inherit" onClick={notifyt}>
            <SearchIcon />
          </IconButton>

          </div>

          <div style={{marginTop:"4%"}}>
        <IconButton
          size="large"
          color="inherit"
          onClick={notifyt}
        >
        
          <Badge badgeContent={4} color="error">
            <NotificationsNoneOutlinedIcon  />
          </Badge>
        </IconButton>
        </div>
      
        <div className='inner__user' >
        
          <span>Helen Smith</span>
          <img src={Usericon} />
          
        </div>
       
        </div>
  )
}

export default Tfirst