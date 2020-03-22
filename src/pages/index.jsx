import React from 'react';
import {Link} from 'react-router-dom'
import Card from './select_card'

const Mainpage = () =>  {
    return(
        <div>
            <div>
            <h3>Welcome</h3>
            <small>test</small>
            </div>
            <div>Card</div>
            <div>
            <Link to="/p1">player 1</Link>
            <Link to="/p2">player 2</Link>
            </div>
        </div>
    );
};
export default Mainpage