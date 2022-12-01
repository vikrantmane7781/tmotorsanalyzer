import React,{useState} from 'react'
import "./Firstsidebar.css";


export default function Firstsidebar({li}) {

   
    const [window, setWindow] = useState(false);

   
  return (
    <div className='first'>
    <nav className="navbar-menu">
    
    <ul className="navbar__list">
      {li.map((item, i) => (
        <div className="navbar__li-box" key={i}>
         
          <li
            className="navbar__li"
            style={{ display:  "inline-block"  }}
          >
            {item[0]}
          </li>
        </div>
      ))}
    </ul>
  </nav>
  </div>
  )
}

