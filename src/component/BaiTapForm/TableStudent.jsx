import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableStudent extends Component {
    renderStudent=()=>{
        let {arrStudent}=this.props
        // console.log(this.props.arrStudent)
        // console.log(this.props.studentEdit )
        return arrStudent.map((student,index)=>{
            return  <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>{
                  const studentID=student.id;
                  const action={
                    type:'QuanLySinhVienReducer/deleteStudent',
                    payload:studentID
                  }
                  this.props.dispatch(action);
                }}>Xóa</button>
                <button className='btn btn-primary mx-2'onClick={()=>{
                  const action={
                    type:'QuanLySinhVienReducer/editStudent',
                    payload: student
                  }
                  this.props.dispatch(action)
                }}>Sửa</button>
            </td>
        </tr>
        })
    }

    
  render() {
    // console.log(this.props.arrStudent)
    return (
      <table className='table mt-2'>
        <thead className='bg-dark text-white'>
            <tr>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Tùy chọn</th>
            </tr>
        </thead>
        <tbody>
         {this.renderStudent()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  arrStudent:state.QuanLySinhVienReducer.arrStudent
})


export default connect(mapStateToProps)(TableStudent)
