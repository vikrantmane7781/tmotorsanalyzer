import React from 'react'
import "./Thirdsidebar.css";
import Tfirst from './Tfirst/Tfirst';
import Specs from "./Specs/Allspecs"
import Footer from './Footer/Footer';

function Thirdsidebar() {
  return (
    <div className="third">
       <Tfirst /> 
       <Specs />
       <Footer />
    </div>
  )
}

export default Thirdsidebar