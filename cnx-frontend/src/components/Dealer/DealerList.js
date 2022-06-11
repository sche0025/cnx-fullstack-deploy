import React, { Fragment, useState, useEffect } from 'react';
import { Table,Spinner, Alert } from 'react-bootstrap';
import Dealer from './Dealer'
import {requestFromBackend} from '../Request/request'
const DealerList = () =>{
    const [dealerList, setDealers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState(false);
    // reqeust to backend when first mount
    useEffect(() => {
        requestFromBackend('/api/dealers', setDealers, setIsLoading,setErrorText );
    }, []);
    // render dealer table
    return(
        <Fragment>
        <h2> Dealers List</h2>    
          <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>BAC</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                {                       
                    dealerList.map((dealer,index)=>      
                        <Dealer dealer={dealer} key={index}/> 
                )}      
              </tbody>
            </Table>
            { isLoading && <Spinner animation="border" />}
            <Alert key='danger' variant='danger' show={!!errorText}>
                {errorText}
            </Alert>
            { (!dealerList.length && !isLoading ) && <div>No Record</div>}
        </Fragment>
    )
}

export default DealerList;