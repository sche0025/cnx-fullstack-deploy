import React from 'react';
import cat from '../Assets/cat.jpg'
import {useHistory} from 'react-router-dom'
const NotFound = (props) =>{
    const history = useHistory();
    const redirectToHomePage = () =>{
        history.push(`/`);
    }
    return(
        <div> 
            <h2>Please go to a valide URL, click my cat to home page</h2>
            <img src={cat} onClick={redirectToHomePage}/> 
        </div>
       
    )
}

export default NotFound;