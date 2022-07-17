import Button from './Button'
import React from 'react'
import { useState } from 'react'
import Setorder from './Setorder';
import * as ReactDOM from 'react-dom';

function changeclass(){
  let element = document.getElementById('editdiv')
  ReactDOM.findDOMNode(element).style.display = 'none'
}
const Editcomment = () => {
  const [active , setActive]=useState('true');
  return (
    <div className='editdiv' id = 'editdiv'>
        <h3> Edit Comment</h3> <br />
        <div className='row'>
          <div className='col-3'>
            <label style={{margin:'10px'}} htmlFor="">Name </label>
          </div>
          <div className='col-9'>
            <input type="text" placeholder='My comment' />
            <br />
            <Button className='editbtn' text='Cancel' color='gray' onClick={changeclass} />
            <Button className='editbtn' text='Save' color='rgb(74, 88, 231)' />
            { active==='false' && <Setorder/>}
          </div>
        </div>
        <br />
        <br />
    </div>
  )
}

export default Editcomment