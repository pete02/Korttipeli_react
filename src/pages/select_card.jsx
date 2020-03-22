import React,{useState, Component} from 'react'
import {getsel} from './set_value'
import {slcard} from './set_value'
let sel=53

const sk = require(`./assets/kortit/${sel}.png`);
const Card=()=>{
        sel=slcard()
        return(
            <div>
                <img src={sk} className="die" alt="Die one" />
            </div>
        )

    }
export default Card




