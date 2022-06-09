import React, { Fragment} from 'react';
import {useHistory} from 'react-router-dom'
const Dealer = (props) =>{
    const {dealer:{name, brand, bac, city, state, country}} = props
    const history = useHistory();
    const redirectToDealerItem = () =>{
        history.push(`/vehicles/${bac}`)
    }
    return(
        <Fragment >
            <tr onClick={redirectToDealerItem}>
            <td>{bac}</td>
            <td>{brand}</td>
            <td>{name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{country}</td>
            </tr>
        </Fragment>
    )
}

export default Dealer;