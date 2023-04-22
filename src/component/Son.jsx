import React, { Component, useMemo } from "react";

export default (props) => {
 
 let Data= useMemo(() =>{
    console.log('render')
    return props.name+'wowode'
 }, [props.name])
  return (
    <>
      <div>
       
      </div>
      <div>{Data}</div>
    </>
  );
};