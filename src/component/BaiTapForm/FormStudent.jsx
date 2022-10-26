import React, { Component } from 'react'
import { connect } from 'react-redux'
import {QuanLySinhVien} from '../../redux/Reducer/QuanLySinhVienReducer'
import { editStudent } from '../../redux/Reducer/QuanLySinhVienReducer'
import { updateStudent } from '../../redux/Reducer/QuanLySinhVienReducer'
 class FormStudent extends Component {
    state={
        values:{
        id:'',
        name:'',
        phone:'',
        email:''
        },
        errors:{
        id:'',
        name:'',
        phone:'',
        email:''
        },
        isSubmit:true,
        arrppp:[]
    }

    handleChange=(e)=>{
        let{id,value}=e.target
        let submit=false
        let errorMessage='';
        if(value.trim()===''){
            errorMessage='Không được bỏ trống'
            // submit=true
        }
        else if(id==='email'){
            let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(value)){
                errorMessage= 'Email không đúng định dạng'
                // submit=true
            }
        }
        else if(id==='phone'){
            let regex=/^(0|[0-9][0-9]*)$/;
            if(!regex.test(value)){
                errorMessage= 'Số điện thoại không đúng định dạng'
                // submit=true
            }
        }
        else if(id==='name'){
            let regex=/^[a-zA-Z ]+$/
            if(!regex.test(value)){
                errorMessage='Họ tên không đúng định dạng'
                // submit=true
            }
        } 
        let values={...this.state.values,[id]:value}
        let errors={...this.state.errors,[id]:errorMessage}
        this.setState({
            values: values,
            errors:errors,
            isSubmit:submit
        },()=>{
            // console.log(this.state)
            for(let key in this.state.values){
                if(this.state.values[key]===''){
                    this.setState({
                        isSubmit:true
                    })
                }
            }
            for(let key in this.state.errors){
                if(this.state.errors[key]!==''){
                    this.setState({
                        isSubmit:true
                    })
                }
            }
        })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    saveLocalStore=()=>{
        let stringArr=JSON.stringify(this.props.arrStudent);
        localStorage.setItem('arrStudent',stringArr);
    }
    getLocalStore=()=>{
        if(localStorage.getItem('arrStudent')){
            let arrStudent=JSON.parse(localStorage.getItem('arrStudent'))
            return arrStudent;
        }
        return []
    }

  render() {
    let {id, name, phone, email}=this.state.values
    return (
      <div className='container'>
          <form onSubmit={this.handleSubmit}>
        <h3>Bài tập quản lý sinh viên</h3>
        <div className='card'>
            <div className='card-header bg-dark text-white'>
                <h3>Thông tin sinh viên</h3>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className="col-6">
                        <div className='form'>
                            <p>Mã số sinh viên</p>
                            <input className='form-control' name='id' id='id' value={id}  onChange={this.handleChange} />
                            <p className='text-danger '>{this.state.errors.id}</p>
                        </div>
                        <div className='form'>
                            <p>Số điện thoại</p>
                            <input className='form-control' name='phone' id='phone' value={phone}   onChange={this.handleChange} />
                            <p className='text-danger '>{this.state.errors.phone}</p>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className='form'>
                            <p>Họ tên sinh viên</p>
                            <input className='form-control' name='name' id='name'  value={name}  onChange={this.handleChange}/>
                            <p className='text-danger '>{this.state.errors.name}</p>
                        </div>
                        <div className='form'>
                            <p>Email</p>
                            <input className='form-control' name='email' id='email' value={email}   onChange={this.handleChange}/>
                            <p className='text-danger '>{this.state.errors.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex'>
        <div>
        <button className='btn btn-success mt-2' disabled={this.state.isSubmit} onClick={()=>{
            const student = this.state.values
            const action={
                type:'QuanLySinhVienReducer/addStudent',
                payload:student
            }
            this.props.dispatch(action)
        }}>Thêm sinh viên</button>
        <button className='btn btn-primary mt-2 mx-2' disabled={this.state.isSubmit} onClick={()=>{
            const student=this.state.values
            const action={
                type:'QuanLySinhVienReducer/updateStudent',
                payload:student
            }
            this.props.dispatch(action)
        }}>Cập nhật</button>
        </div>

        <div style={{marginLeft:'700px'}} >
        <input type="text" className='mt-2' />
        <button className='btn btn-success' onClick={()=>{
            const action={
                type:'QuanLySinhVienReducer/searchStudent',
                payload:3
            }
            this.props.dispatch(action)
        }} >Search</button>
        </div>
        </div>
        
    </form>
      </div>    
    )
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.studentEdit.id!==this.props.studentEdit.id){
        this.setState({
            values:this.props.studentEdit
        })
    }
    if(prevProps.arrStudent!==''){
        this.saveLocalStore();
    }
  }
  componentDidMount(){
    if(localStorage.getItem('arrStudent')){
        let newArrStudent=JSON.parse(localStorage.getItem('arrStudent'))
        const action={
            type:'QuanLySinhVienReducer/getStore',
            payload:newArrStudent
        }
        this.props.dispatch(action)
    }
    return [];
  }
}
const mapStateToProps = (state) => ({
    studentEdit:state.QuanLySinhVienReducer.studentEdit,
    arrStudent:state.QuanLySinhVienReducer.arrStudent
  })
export default connect(mapStateToProps)(FormStudent)

