import React from 'react'
import Button from './Button'
import { BiPencil } from "react-icons/bi"
import { useState } from 'react'
import Editcomment from './Editcomment'

const Setorder = () => {
  const [edit , setedit]=useState('false')
  return (
    <div>
      <h2>Set Order</h2>
      <div className='set'>
      <p>
        <span className='setbtn' onClick={()=> setedit('1st') }> <BiPencil style={{width:'50px', height:'20px' }}/> </span>
        <span style={{display:'inline', textAlign:'center'}}> Hi I am comment 1 </span>
        <input type="checkbox" style={{ float:'right'}} />
      </p>
        <br />
      <p>
      <span className='setbtn' onClick={()=> setedit('2nd') }> <BiPencil style={{width:'50px', height:'20px' }} /> </span>
        <span style={{display:'inline', textAlign:'center' }}> Okay this is comment 2 </span>
        <input type="checkbox" style={{ float:'right' }} />
      </p>
        <br />
      <p>
      <span className='setbtn' onClick={()=> setedit('3rd') }> <BiPencil style={{width:'50px', height:'20px' }}/> </span> 
        <span style={{display:'inline' , textAlign:'center'}}> Deploying comment 3 </span>
        <input type="checkbox" style={{ float:'right'}} />
      </p>
        <br />
        <p>
      <span className='setbtn' onClick={()=> setedit('4th') }> <BiPencil style={{width:'50px', height:'20px' }}/> </span>
        <span style={{display:'inline' , textAlign:'center'}}> Raj's comment </span>
        <input type="checkbox" style={{ float:'right'}} />
      </p>
    </div> <br />
    { edit==='1st' && <Editcomment/> }
    { edit==='2nd' && <Editcomment/> }
    { edit==='3rd' && <Editcomment/> }
    { edit==='4th' && <Editcomment/> } 
    </div>
  )
}
export default Setorder