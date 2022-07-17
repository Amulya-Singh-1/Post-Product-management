import {Table } from 'react-bootstrap'
import React from 'react'

const Posttable = () => {
  return (
    <div>
        <Table striped bordered hover >
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Comment</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td> Hi I am comment 1 <input type="checkbox" style={{ float:'right'}} /> </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td> Okay this is comment 2 <input type="checkbox" style={{ float:'right'}} /> </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry </td>
      <td> Deploying comment 3 <input type="checkbox" style={{ float:'right'}} /> </td>
    </tr>
    <tr>
      <td>4</td>
      <td> Raj </td>
      <td> Raj's comment <input type="checkbox" style={{ float:'right'}} /> </td>
    </tr>
    </tbody>
    </Table>
    </div>
  )
}

export default Posttable