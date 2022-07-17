import React from 'react';
import Searchbar from './Searchbar';
import Button from './Button';
import Posttable from './Posttable';
import Setorder from './Setorder';
import 'bootstrap/dist/css/bootstrap.min.css';

function Openpost() {
  return (
    <div>
      <br />
      <div className='row'>
          <div className='col'>
            <label > <h2> Comments : </h2>  </label>  <Searchbar style={{display:'inline'}} />
          </div>
          <div className='col'>
              <Button text="Save changes" color={'green'} style={{float:'right'}} />
          </div>
      </div>
      <br />
      <br />
        <div className='row'>
           <div className='col '>
              <Posttable />
           </div>
           <div className='col '>
              <Setorder />
           </div>
        </div>
    <br />
    <br />
    </div>
  )
}
export default Openpost