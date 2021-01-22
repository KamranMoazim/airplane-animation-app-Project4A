import React, { useState, useRef, useLayoutEffect } from 'react'
import cloudimage from './images/clouds.png'
import mountainimage from './images/mountain.png'
import Jet from './components/jet.js'
import Plane from './components/plane.js'
import Helicopter from './components/helicopter.js'



function App() {

  const cloudAnimation1 = useRef(null);
  const cloudAnimation2 = useRef(null);
  const cloudAnimation3 = useRef(null);
  const cloudAnimation4 = useRef(null);
  const jetAnimation = useState(null);

  const [vehicle , setVehicle] = useState(1)
  const [speed,setSpeed] = useState(10000)

  const toJet = () => {
    setVehicle(1)
  }
  const toPlane = () => {
    setVehicle(2)
  }
  const toHelicopter = () => {
    setVehicle(3)
  }

  useLayoutEffect(() => {

    var sceneryFrames =[
        {transform: 'translateX(1535px)'},
        {transform: 'translateX(-100%)'}
    ];
    var cloudTiming1 = {
        duration: 6000,
        iterations: Infinity,
        playbackRate: -2
    };
    var cloudTiming2 = {
        duration: 4000,
        iterations: Infinity,
        playbackRate: -2
    };
    var cloudTiming3 = {
        duration: 8000,
        iterations: Infinity,
        playbackRate: -2
    };
    var cloudTiming4 = {
        duration: 5000,
        iterations: Infinity,
        playbackRate: -2
    };


    var jetPositions =[
      {transform: 'translate(1334px, -60px)'},
      {transform: 'translate(1134px, -100px)'},
      {transform: 'translate(1134px, -150px)'},
      {transform: 'translate(1134px, -180px)'},
      {transform: 'translate(0px, -180px)'}
  ];
    
  var forAllVehicleTiming = {
        duration: speed,
        iterations: Infinity,
        playbackRate: -2
    };


    // var background1Movement1 = cloudAnimation1.current.animate(sceneryFrames, cloudTiming1);
    // var background1Movement2 = cloudAnimation2.current.animate(sceneryFrames, cloudTiming2);
    // var background1Movement3 = cloudAnimation3.current.animate(sceneryFrames, cloudTiming3);
    // var background1Movement4 = cloudAnimation4.current.animate(sceneryFrames, cloudTiming4);
    // var background1Movement5 = jetAnimation.current.animate(jetPositions, forAllVehicleTiming);
    
})

if (vehicle === 1) {

  return (
    <div style={{backgroundColor:"lightblue", height:"720px", width:"1835px"}}>
      <button style={{marginLeft:"450px", marginTop:"30px"}} onClick={()=>{ setSpeed(speed-1000) }}>fast it</button>
      <button onClick={()=>{ setSpeed(speed+1000) }}>slow it</button>
      <button onClick={toPlane}>Change to Plane</button>

      <div ref={cloudAnimation1}>
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <div ref={cloudAnimation3}>
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
        </div>
      </div>
      <div ref={cloudAnimation2}>
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <div ref={cloudAnimation4}>
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
        </div>
      </div>

      <div style={{display:"flex"}}>
      <span ref={jetAnimation}>
        <Jet />
      </span>
        <img src={mountainimage} height={200} style={{paddingLeft:"60px"}} alt="" />
        <img src={mountainimage} alt="" />
        <img src={mountainimage} height={200} alt="" />
        <img src={mountainimage} alt="" />
      </div>

    </div>
  );

} else if( vehicle === 2 ) {

  return (
    <div style={{backgroundColor:"lightblue", height:"720px", width:"1835px"}}>
      <button style={{marginLeft:"450px", marginTop:"30px"}} onClick={()=>{ setSpeed(speed-1000) }}>fast it</button>
      <button onClick={()=>{ setSpeed(speed+1000) }}>slow it</button>
      <button onClick={toHelicopter}>Change to Helicopter</button>

      <div ref={cloudAnimation1}>
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <div ref={cloudAnimation3}>
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
        </div>
      </div>
      <div ref={cloudAnimation2}>
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <div ref={cloudAnimation4}>
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
        </div>
      </div>

      <div style={{display:"flex"}}>
      <span ref={jetAnimation}>
        <Plane />
      </span>
        <img src={mountainimage} height={200} style={{paddingLeft:"60px"}} alt="" />
        <img src={mountainimage} alt="" />
        <img src={mountainimage} height={200} alt="" />
        <img src={mountainimage} alt="" />
      </div>

    </div>
  );
}

else {
  return (
    <div style={{backgroundColor:"lightblue", height:"720px", width:"1835px"}}>
      <button style={{marginLeft:"450px", marginTop:"30px"}} onClick={()=>{ setSpeed(speed-1000) }}>fast it</button>
      <button onClick={()=>{ setSpeed(speed+1000) }}>slow it</button>
      <button onClick={toJet}>Change to Jet</button>

      <div ref={cloudAnimation1}>
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <div ref={cloudAnimation3}>
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
        </div>
      </div>
      <div ref={cloudAnimation2}>
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <img src={cloudimage} alt="" />
        <div ref={cloudAnimation4}>
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
          <img src={cloudimage} alt="" />
        </div>
      </div>

      <div style={{display:"flex"}}>
      <span ref={jetAnimation}>
        <Helicopter />
      </span>
        <img src={mountainimage} height={200} style={{paddingLeft:"60px"}} alt="" />
        <img src={mountainimage} alt="" />
        <img src={mountainimage} height={200} alt="" />
        <img src={mountainimage} alt="" />
      </div>

    </div>
  );
}
}

export default App;
