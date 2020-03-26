import React, {useContext, useState} from 'react';
import './App.css';
import openSocket from 'socket.io-client'








const P2=()=> {
  const socket=openSocket('http://petenpelit.duckdns.org:2000')

  const [scard,setscard]=useState(53)
  const [card1,setcard1]=useState(53);
  const [card2,setcard2]=useState(53);
  const [card3,setcard3]=useState(53);
  const [card4,setcard4]=useState(53);
  const [card5,setcard5]=useState(53);
  const [card6,setcard6]=useState(53);
  const [card7,setcard7]=useState(53);
  const [card8,setcard8]=useState(53);
  const [card9,setcard9]=useState(53);
  const [card10,setcard10]=useState(53);
    function getcard1(){
      if(card1===53){
        socket.emit('getcard','p2c1')
      }
  }
  function getcard2(){
    if(card2===53){
      socket.emit('getcard','p2c2')    }
  }
  function getcard3(){
    if(card3===53){
      socket.emit('getcard','p2c3')
    }
  }
  function getcard4(){
    if(card4===53){
      socket.emit('getcard','p2c4')
    }
  }
  function getcard5(){
    if(card5===53){
      socket.emit('getcard','p2c5')
    }
  }
  function getcard6(){
    if(card6===53){
      socket.emit('getcard','p2c6')
    }
  }
  function getcard7(){
    if(card7===53){
      socket.emit('getcard','p2c7')
    }
  }

  function getcard8(){
    if(card8===53){
      socket.emit('getcard','p2c8')
    }
  }
  function getcard9(){
    if(card9===53){
      socket.emit('getcard','p2c9')
    }
  }
  function getcard10(){
    if(card10===53){
      socket.emit('getcard','p2c10')
    }
  }

  function selcard1(){
    if(card1!==53){
    socket.emit('card',card1)
    setcard1(53)}
  }
  function selcard2(){
    if(card2!==53){
      socket.emit('card',card2)
      setcard2(53)}
  }
  function selcard3(){
    if(card3!==53){
      socket.emit('card',card3)
      setcard3(53)}
  }
  function selcard4(){
    if(card4!==53){
      socket.emit('card',card4)
      setcard4(53)}
  }
  function selcard5(){
    if(card5!==53){
      socket.emit('card',card5)
      setcard5(53)}
  }
  function selcard6(){
    if(card6!==53){
      socket.emit('card',card6)
      setcard6(53)}
  }
  function selcard7(){
    if(card7!==53){
      socket.emit('card',card7)
      setcard7(53)}
  }
  function selcard8(){
    if(card8!==53){
      socket.emit('card',card8)
      setcard8(53)}
  }
  function selcard9(){
    if(card9!==53){
      socket.emit('card',card9)
      setcard9(53)}
  }
  function selcard10(){
    if(card10!==53){
      socket.emit('card',card10)
      setcard10(53)}
  }
  socket.on('scard', function(data){
  setscard(data)

  })
  socket.on('p2c1',function(data){
    setcard1(data)
    console.log(data)
  })
  socket.on('p2c2',function(data){
    setcard2(data)
  })
  socket.on('p2c3',function(data){
    setcard3(data)
  })
  socket.on('p2c4',function(data){
    setcard4(data)
  })
  socket.on('p2c5',function(data){
    setcard5(data)
  })
  socket.on('p2c6',function(data){
    setcard6(data)
  })
  socket.on('p2c7',function(data){
    setcard7(data)
  })
  socket.on('p2c8',function(data){
    setcard8(data)
  })
  socket.on('p2c9',function(data){
    setcard9(data)
  })
  socket.on('p2c10',function(data){
    setcard10(data)
  })

  const sk=require(`./assets/kortit/${scard}.png`)  
  const k1 = require(`./assets/kortit/${card1}.png`);
  const k2 = require(`./assets/kortit/${card2}.png`);
  const k3 = require(`./assets/kortit/${card3}.png`);
  const k4 = require(`./assets/kortit/${card4}.png`);
  const k5 = require(`./assets/kortit/${card5}.png`);
  const k6 = require(`./assets/kortit/${card6}.png`);
  const k7 = require(`./assets/kortit/${card7}.png`);
  const k8 = require(`./assets/kortit/${card8}.png`);
  const k9 = require(`./assets/kortit/${card9}.png`);
  const k10 = require(`./assets/kortit/${card10}.png`);
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <img src={sk} className="die" alt="Die one" />
      </div>
      <div>
          <button className="button" onClick={selcard1}>select card</button>
          <button className="button" onClick={selcard2}>select card</button>
          <button className="button" onClick={selcard3}>select card</button>
          <button className="button" onClick={selcard4}>select card</button>
          <button className="button" onClick={selcard5}>select card</button>
          <button className="button" onClick={selcard6}>select card</button>
          <button className="button" onClick={selcard7}>select card</button>
          <button className="button" onClick={selcard8}>select card</button>
          <button className="button" onClick={selcard9}>select card</button>
          <button className="button" onClick={selcard10}>select card</button>
      </div>
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={k1} className="die" alt="Die one" />
          <img src={k2} className="die" alt="Die one" />
          <img src={k3} className="die" alt="Die one" />
          <img src={k4} className="die" alt="Die one" />
          <img src={k5} className="die" alt="Die one" />
          <img src={k6} className="die" alt="Die one" />
          <img src={k7} className="die" alt="Die one" />
          <img src={k8} className="die" alt="Die one" />
          <img src={k9} className="die" alt="Die one" />
          <img src={k10} className="die" alt="Die one" />
        </div>
        <div>
        </div>
        <div>
          <button className="button" onClick={getcard1}>get card</button>
          <button className="button" onClick={getcard2}>get card</button>
          <button className="button" onClick={getcard3}>get card</button>
          <button className="button" onClick={getcard4}>get card</button>
          <button className="button" onClick={getcard5}>get card</button>
          <button className="button" onClick={getcard6}>get card</button>
          <button className="button" onClick={getcard7}>get card</button>
          <button className="button" onClick={getcard8}>get card</button>
          <button className="button" onClick={getcard9}>get card</button>
          <button className="button" onClick={getcard10}>get card</button>
        </div>
      </header>
    </div>
  );
}

export default P2;