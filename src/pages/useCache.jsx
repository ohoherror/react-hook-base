import React, { useState } from 'react';
import Son from '../component/Son'
export default (props)=>{
    const [number,setNumber]=useState(0)
    const [name, setName]=useState('Yui')
    return(
        <div className='flex flex-col'>
        <button className='pb-10' onClick={()=>{setNumber(number+1)}}>{'number is:'+number}</button>
       
        <button onClick={()=>{setName('rena')}}>{'change name'}</button>
        <Son name={name} number={number}/>
        </div>
    )
}