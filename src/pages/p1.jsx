import React, {usestate, useState} from 'react';
import './App.css';
import {kortti} from '../kortti'
import {lasku} from '../kortti'
let sel=53
const test1=kortti()
const test2=kortti()
const test3=kortti()
const test4=kortti()
const test5=kortti()
const test6=kortti()
const test7=kortti()



const P1=()=> {
  
  const [i,seti]=useState(0);
  const [card1,setcard1]=useState(test1);
  const [card2,setcard2]=useState(test2);
  const [card3,setcard3]=useState(test3);
  const [card4,setcard4]=useState(test4);
  const [card5,setcard5]=useState(test5);
  const [card6,setcard6]=useState(test6);
  const [card7,setcard7]=useState(test7);
    function getcard1(){
    setcard1(kortti())
    seti(lasku());
  }
  function getcard2(){
    setcard2(kortti())
    seti(lasku());
  }
  function getcard3(){
    setcard3(kortti())
    seti(lasku());
  }
  function getcard4(){
    setcard4(kortti())
    seti(lasku());
  }
  function getcard5(){
    setcard5(kortti())
    seti(lasku());
  }
  function getcard6(){
    setcard6(kortti())
    seti(lasku());
  }
  function getcard7(){
    setcard7(kortti())
    seti(lasku());
  }

  function selcard1(){
    sel=card1
    setcard1(53)
  }
  function selcard2(){
    sel=card2
    setcard2(53)
  }
  function selcard3(){
    sel=card3
    setcard3(53)
  }
  function selcard4(){
    sel=card4
    setcard4(53);
  }
  function selcard5(){
    sel=card5
    setcard5(53)
  }
  function selcard6(){
    sel=card6
    setcard6(53)
  }
  function selcard7(){
    sel=card7
    setcard7(53);
  }


  const k1 = require(`./assets/kortit/${card1}.png`);
  const k2 = require(`./assets/kortit/${card2}.png`);
  const k3 = require(`./assets/kortit/${card3}.png`);
  const k4 = require(`./assets/kortit/${card4}.png`);
  const k5 = require(`./assets/kortit/${card5}.png`);
  const k6 = require(`./assets/kortit/${card6}.png`);
  const k7 = require(`./assets/kortit/${card7}.png`);
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={k1} className="die" alt="Die one" />
          <img src={k2} className="die" alt="Die one" />
          <img src={k3} className="die" alt="Die one" />
          <img src={k4} className="die" alt="Die one" />
          <img src={k5} className="die" alt="Die one" />
          <img src={k6} className="die" alt="Die one" />
          <img src={k7} className="die" alt="Die one" />
        </div>
        <span>{i}</span>
        <div>
          <button className="button" onClick={getcard1}>get card</button>
          <button className="button" onClick={getcard2}>get card</button>
          <button className="button" onClick={getcard3}>get card</button>
          <button className="button" onClick={getcard4}>get card</button>
          <button className="button" onClick={getcard5}>get card</button>
          <button className="button" onClick={getcard6}>get card</button>
          <button className="button" onClick={getcard7}>get card</button>
        </div>
      </header>
    </div>
  );
}


export default P1;