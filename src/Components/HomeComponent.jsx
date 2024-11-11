import React, { createContext, useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
import { CardComponent } from './CardComponent';
import { NavbarComponent } from './NavbarComponent';
import { Footercomponent } from './Footercomponent';


export const contextdata =createContext();

export const HomeComponent = () => {
    const productdata=useLoaderData();
    const spliteddata=[...productdata.products];

    
    const[cardcount,setcardCount]=useState([
        {id:1,count:0,removebtn:false},
        {id:2,count:0,removebtn:false},
        {id:3,count:0,removebtn:false},
        {id:4,count:0,removebtn:false},
        {id:5,count:0,removebtn:false},
        {id:6,count:0,removebtn:false},
        {id:7,count:0,removebtn:false},
        {id:8,count:0,removebtn:false},
        {id:9,count:0,removebtn:false},
        {id:10,count:0,removebtn:false},
    ])
    useEffect(()=>{},[cardcount])

    console.log("check:",spliteddata);


  return (
    <div className='shopcontainer'>
        
        <contextdata.Provider value={{cardcount,setcardCount}}>
        <NavbarComponent/>
        <CardComponent data={spliteddata}/>
        <Footercomponent/>    
        </contextdata.Provider>

    </div>
    )
}
