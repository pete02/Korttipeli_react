import React from 'react';
import {Link} from 'react-router-dom'
import openSocket from 'socket.io-client'

const Mainpage = () =>  {
    const socket=openSocket('http://192.168.1.36:2000');
    socket.emit('new')
    return(
        <div>
            <div>
            <h3>Welcome</h3>
            </div>
            <div>
            <Link to="/p1">player 1</Link>
            </div>
            <br/>
            <div>
            <Link to="/p2">player 2</Link>
            </div>
            <br/>
            <div>
            <Link to="/p2">player 3</Link>
            </div>
        </div>
    );
};
export default Mainpage