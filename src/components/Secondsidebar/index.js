import React,{useEffect, useState} from 'react'
import "./Secondsidebar.css"
import GigData from "../../carswhole.json";
import 'react-circular-progressbar/dist/styles.css';
import CarMode from "../imgres/cvrt2.png"
import { useStateValue } from '../reducers/stateProvider';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Secondsidebar() {
  
  const [value, setValue] = useState(1234);
  const[user,dispatch]=useStateValue();

  useEffect(()=>{
    //console.log("I am select value -=== ",car)
  dispatch({
      type:"SET_USER",
      user:value 
    })
    
    },[value])
    

    const rightCirclesData=[
      {classname:"first__circle",value:GigData[value].lFrontHeadLight,text:GigData[value].lFrontHeadLight,textIndicator:"%",
      backgroundColor:"#7f281f",pathColor:"#f17070",heading:"L Front Head Light"},

      {classname:"second__circle",value:GigData[value].lFrontTire,text:GigData[value].lFrontTire,textIndicator:"psi",
      backgroundColor:"#3351b3",pathColor:"",heading:"L Front Tire"},

      {classname:"third__circle",value:GigData[value].lRareTire,text:GigData[value].lRareTire,textIndicator:"psi",
      backgroundColor:"#7f281f",pathColor:"#f17070",heading:"L RareTire"}
    ]
    const leftCircleData=[
      {classname:"forth__circle",value:GigData[value].rFrontHeadLight,text:GigData[value].rFrontHeadLight,textIndicator:"%",
      backgroundColor:"#7f281f",pathColor:"#f17070",heading:"R Front Head Light"},

      {classname:"fifth__circle",value:GigData[value].rFrontTire,text:GigData[value].rFrontTire,textIndicator:"psi",
      backgroundColor:"#3351b3",pathColor:"",heading:"R Front Tire"},

      {classname:"sixth__circle",value:GigData[value].rRareTire,text:GigData[value].rRareTire,textIndicator:"psi",
      backgroundColor:"#7f281f",pathColor:"#f17070",heading:"R Rare Tire"},
    ]
  return (
    <div className='second'>
                     <div className='ourfor__mid'>
                      <div className='header'>
                        <h1 className='hFirst'>{GigData[value].model }</h1> <h1 className='hSecond'>{GigData[value].modelno}</h1>
                      </div>
                      <div className='select__container'>
                      <select value={value} onChange={(e)=>setValue(e.target.value)}>
                        <option value="1234">Vehicle ID: 1234</option>
                        <option value="1235">Vehicle ID: 1235</option>
                        <option value="1236">Vehicle ID: 1236</option>
                        <option value="1237">Vehicle ID: 1237</option>
                        </select>
                      </div>
                      </div>
                      
                      <div className='mainforcar'>
                            <div className='leftSide__status'>
                            {
                              
                              rightCirclesData.map((data,key)=>(
                                <>
                              <div className={data.classname} key={key}>
                            <CircularProgressbar
                                value={data.value*2}
                                text={`${data.text}${data.textIndicator}`}
                                background
                                backgroundPadding={0}
                                strokeWidth={5}
                                styles={buildStyles({
                                  backgroundColor: `${data.backgroundColor}`,
                                  textColor: "#fff",
                                  pathColor: `${data.pathColor}`,
                                  trailColor: "transparent",
                                  textSize: '28px',
                                  strokeLinecap:"butt",
                                  
                                })}
                              />
                              </div>
                              <h6 className={`head__${data.classname}`} style={{whiteSpace:"nowrap",color:"white-smoke",
                              position:"absolute",lineHeight:"10px"}}>{data.heading}</h6>
                              </>
                              ))
                            }
                              
                            </div>
                          <div className='midSide__car'>
                            <img className='car' src={CarMode} />
                          </div>
                          <div className='rightSide__status'>
                          {
                              leftCircleData.map((data,key)=>(
                                <>
                                <div className={data.classname} key={key}>
                            <CircularProgressbar
                                value={data.value*2}
                                text={`${data.text}${data.textIndicator}`}
                                background
                                backgroundPadding={0}
                                strokeWidth={5}
                                styles={buildStyles({
                                  backgroundColor: `${data.backgroundColor}`,
                                  textColor: "#fff",
                                  pathColor: `${data.pathColor}`,
                                  trailColor: "transparent",
                                  textSize: '28px',
                                  strokeLinecap:"butt",
                                  
                                })}
                              />
                              </div>
                              <h6 className={`head__${data.classname}`} style={{whiteSpace:"nowrap",color:"white-smoke",
                              position:"absolute",lineHeight:"10px"}}>{data.heading}</h6>
                              </>
                              ))
                            }
                          </div>
                     </div>
    </div>
  )
}

