import React, { useState,useRef, useEffect } from 'react'
import './Allspecs.css'
import Turbine from "../../imgres/turbine.png";
import Headlight from "../../imgres/headlight.png"
import Tire from "../../imgres/tire.jpg";
import { useStateValue } from '../../reducers/stateProvider';
import GigData from "../../../carswhole.json";


export default function Allspecs() {
  const diskm = useRef(null);

  const[{user},dispatch]=useStateValue();

  const mainStatData=[
    {name:"Engine",classname:"engine",url:Turbine,crit:GigData[user].engineCrit},
    {name:"Head Light",classname:"headlight",url:Headlight,crit:GigData[user].headLightCrit},
    {name:"Tire",classname:"tire",url:Tire,crit:GigData[user].tire},
    ]
  
  const progressBarData=[
      {aclassname:"title__one",title:"Battery level",bclassname:"first__progressBar",pgvalue:GigData[user].bvalue,indicator:"%"},
      {aclassname:"title__two",title:"Roted range",bclassname:"first__progressBar",pgvalue:GigData[user].rvalue,indicator:"ml"},
  ] 

  const tempratureData=[  
    {name:"Inside",classname:"inside",value:GigData[user].insideTemp},
    {name:"Outside",classname:"outside",value:GigData[user].outsideTemp}
    ]

  return (
    <div className='specs'>
        <h3>Specs</h3>
        <div className='distance'>
          <h5>Total Distance</h5>
          <div className="km__heading" >
          <h1 ref={diskm}>{GigData[user].totalDistance}km</h1>
          </div>
          <div className='total__section'>
            <h5>Total</h5>
              
              <div className='headers'>
                {
                  progressBarData.map((pdata,k)=>(
                    <>
                    <div className={pdata.aclassname}>
                <h5>{pdata.title}</h5>
                <h5 style={{marginLeft:"40%"}}>{pdata.pgvalue}{ pdata.indicator}</h5>  
                </div>
                <div className={pdata.bclassname}>
                <progress className='bpg' value={pdata.pgvalue} max="100"> {pdata.pgvalue} </progress>
                  </div>
                  </>
                  ))
                }

                  
              </div>
              <div className='hr'></div>

              <h5>Total</h5>
              <div className='midTotalContainer'>
              {
                mainStatData.map((data,i)=>(
                  
                    <div className='engine' key={i}>
                      <div className={`name__${data.classname}`}>
                      
                      {
                        ((data.crit<3) )?<h6 className='red'>{data.name} </h6>:
                        <h6 className='blue'>{data.name} </h6>
                      }
                      </div> 
                      <div className='img_div'>
                      <img className={`${data.classname}`} src={data.url}/>
                      </div>
                      <div className={`dot__${data.classname}`}>
                        {
                          [...Array(5)].map((e,k)=>
                          
                          (
                            ((data.crit<3) && k<data.crit)?<span className='dot red'></span>:
                            ((data.crit>2) && k<data.crit)?<span className='dot blue'></span>:
                            <span className='dot'></span>
                          ))
                        }
                    </div>
                    </div>
                ))
              }
              </div>

              <div className='hr'></div>
              <div className='temprature'>
              <h5>Temprature</h5>
              <div className='inner'>
                {
                  tempratureData.map((dataa,i)=>(
                      <div className={`${dataa.classname}`}>
                      <h6>{dataa.name}</h6>
                      <h2>{dataa.value}<small>°C</small></h2>
                      </div>
                  ))
                }
              </div>
              
              </div>
          </div>
        </div>
    </div>
  )
}
