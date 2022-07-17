import Button from './Button';
import { SiAccenture } from "react-icons/si";
import React from 'react'
import Openpost from './Openpost';
import { useState } from 'react';

const List = () => {
  const [showpost, setshowpost]= useState("false");
  return (
    <div>
      <br />
          <SiAccenture/> <Button className='postbutton' text={'Post 1'} color={'lightgray'} onClick={ ()=> setshowpost("post1") } />    <br />
          { showpost==="post1" && <Openpost /> }
          <SiAccenture/> <Button className='postbutton' text={'Post 2'} color={'lightgray'} onClick={ ()=> setshowpost("post2") } />   <br />
          { showpost==="post2" && <Openpost /> }
          <SiAccenture/> <Button className='postbutton' text={'Post 3'} color={'lightgray'} onClick={ ()=> setshowpost("post3") } />  <br />
          { showpost==="post3" && <Openpost /> }
         <SiAccenture/> <Button className='postbutton' text={'Post 4'} color={'lightgray'} onClick={ ()=> setshowpost("post4") } />   <br />
          { showpost==="post4" && <Openpost /> }
    </div>
  )
}
export default List;