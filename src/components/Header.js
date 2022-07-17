import PropTypes from 'prop-types'
import React from 'react'
import List from './List'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({title }) => {
  return (
    <div className='header'>
        <header>
            <h1> {title} </h1>
        </header>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Active Comments" >
             <List />
          </Tab>
          <Tab eventKey="profile" title="Deleted Comments">
             <p> Empty ... </p>
          </Tab>
      </Tabs>



    </div>    
  )
}

Header.defaultProps={
    title : 'Manage Comments'
}

Header.propTypes ={
    title: PropTypes.string,
}

export default Header