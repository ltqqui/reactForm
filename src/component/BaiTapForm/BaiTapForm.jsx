import React, { Component } from 'react'
import FormStudent from './FormStudent'
import TableStudent from './TableStudent'
export default class BaiTapForm extends Component {
  render() {
    return (
        <div className='container'>
        <FormStudent/>
        <TableStudent/>
    </div>
    )
  }
}
