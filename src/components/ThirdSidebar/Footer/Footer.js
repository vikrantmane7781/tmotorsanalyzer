import React from 'react'
import "./Footer.css";
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Footer() {
 
  const notify=()=>{
    toast('Sorry this feature is not available yet!')
    
  }
  return (
    <div className='footer'>
         <IconButton size="small" aria-label="search" color="inherit" onClick={notify}>
        <SettingsIcon  />
        </IconButton>
        <ToastContainer
        theme="light"
        hideProgressBar={true}
        autoClose={2000}
        />
    </div>
  )
}

