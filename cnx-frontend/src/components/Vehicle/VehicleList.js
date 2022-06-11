import React, { Fragment, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Table , Spinner, Alert} from 'react-bootstrap';
import Vehicle from './Vehicle'
import {requestFromBackend} from '../Request/request'

const VehicleList = () =>{
    const [vehicleList, setVehicle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const { id } = useParams()
    // reqeust to backend when first mount
    useEffect(() => {
        requestFromBackend(`/api/vehicles/${id}`,setVehicle, setIsLoading,setErrorText);
    }, [id]);
    // vehicle table
    return(
        <Fragment>
        <h2> Vehicles List</h2>    
          <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>BAC</th>
                    <th>Vin</th>
                    <th>Ctp Status</th>
                    <th>Onstar Status</th>
                    <th>Create Time</th>
                    <th>Color</th>
                    <th>Stock Number</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                {                       
                    vehicleList.map((vehicle,index)=>      
                        <Vehicle vehicle={vehicle} key={index}/> 
                )}      
              </tbody>
            </Table>
            { isLoading && <Spinner animation="border" />}
            <Alert key='danger' variant='danger' show={!!errorText}>
                {errorText}
            </Alert>
            { (!vehicleList.length && !isLoading ) && <div>No Record</div>}
        </Fragment>

    )
}

export default VehicleList;