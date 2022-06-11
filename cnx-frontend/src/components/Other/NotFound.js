import React from 'react';
import cat from '../Assets/cat.jpg'
import {useHistory} from 'react-router-dom'
// not found page
const NotFound = (props) =>{
    const history = useHistory();
    const redirectToHomePage = () =>{
        history.push(`/`);
    }
    return(
        <div> 
            <h2>Please enter a valide URL, click my cat to home page</h2>
            <img src={cat} onClick={redirectToHomePage}/> 
        </div>
       
    )
}

export default NotFound;