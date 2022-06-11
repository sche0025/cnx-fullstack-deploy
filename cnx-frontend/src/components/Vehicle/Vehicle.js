import React, { Fragment } from 'react';
// Vehicle row
const Vehicle = (props) =>{
    const {vehicle:{bac, vin, ctpStatus, onstarStatus, createdAt, color, stockNumber, year}} = props
    return(
        <Fragment >
            <tr >
            <td>{bac}</td>
            <td>{vin}</td>
            <td>{ctpStatus}</td>
            <td>{onstarStatus}</td>
            <td>{createdAt}</td>
            <td>{color}</td>
            <td>{stockNumber}</td>
            <td>{year}</td>
            </tr>
        </Fragment>
    )
}

export default Vehicle;