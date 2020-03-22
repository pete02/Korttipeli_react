import React, {useContext, useState} from 'react';
import './App.css';
import {kortti} from '../kortti'
import {lasku} from '../kortti'
import Card from './select_card'
import {slcard} from './set_value'




const test1=kortti()
const test2=kortti()
const test3=kortti()
const test4=kortti()
const test5=kortti()
const test6=kortti()
const test7=kortti()


const P2=()=> {
  const [i,seti]=useState(0);
  const [card1,setcard1]=useState(test1);
  const [card2,setcard2]=useState(test2);
  const [card3,setcard3]=useState(test3);
  const [card4,setcard4]=useState(test4);
  const [card5,setcard5]=useState(test5);
  const [card6,setcard6]=useState(test6);
  const [card7,setcard7]=useState(test7);
    function getcard1(){
      if(card1===53){
    setcard1(kortti())
    seti(lasku());
      }
  }
  function getcard2(){
    if(card2===53){
    setcard2(kortti())
    seti(lasku());
    }
  }
  function getcard3(){
    if(card3===53){
    setcard3(kortti())
    seti(lasku());
    }
  }
  function getcard4(){
    if(card4===53){
    setcard4(kortti())
    seti(lasku());
    }
  }
  function getcard5(){
    if(card5===53){
    setcard5(kortti())
    seti(lasku());
    }
  }
  function getcard6(){
    if(card6===53){
    setcard6(kortti())
    seti(lasku());
    }
  }
  function getcard7(){
    if(card7===53){
    setcard7(kortti())
    seti(lasku());
    }
  }

  function selcard1(){
    slcard(card1)
    setcard1(53)
  }
  function selcard2(){
    slcard(card2)
    setcard2(53)
  }
  function selcard3(){
    slcard(card2)
    setcard3(53)
  }
  function selcard4(){
    slcard(card4)
    setcard4(53);
  }
  function selcard5(){
    slcard(card5)
    setcard5(53)
  }
  function selcard6(){
    slcard(card6)
    setcard6(53)
  }
  function selcard7(){
    slcard(card7)
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
      <div>
        <Card/>
      </div>
      <div>
          <button className="button" onClick={selcard1}>select card</button>
          <button className="button" onClick={selcard2}>select card</button>
          <button className="button" onClick={selcard3}>select card</button>
          <button className="button" onClick={selcard4}>select card</button>
          <button className="button" onClick={selcard5}>select card</button>
          <button className="button" onClick={selcard6}>select card</button>
          <button className="button" onClick={selcard7}>select card</button>
      </div>
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

export default P2;