import React from 'react';
import {useLocation } from "react-router-dom";


function Detail(props){
    const location = useLocation();
    console.log(props);
    console.log(location);
    return (<h1>detail</h1>);
}

export default Detail;