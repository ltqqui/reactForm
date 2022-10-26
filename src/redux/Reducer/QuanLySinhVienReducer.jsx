
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrStudent:[

  ],
  studentEdit:{}
}

const QuanLySinhVienReducer = createSlice({
  name: 'QuanLySinhVienReducer',
  initialState,
  reducers: {
    addStudent: (state, {type,payload})=>{
      // const newArr=[...state.arrStudent,payload]
      //       state.arrStudent=newArr;
      //       console.log(state.arrStudent)
      // state.arrStudent
    state.arrStudent=[...state.arrStudent,payload]

            console.log(state.arrStudent)
    },
    deleteStudent:(state,{type,payload})=>{
      state.arrStudent=state.arrStudent.filter(student=>student.id!==payload);
    },
    editStudent:(state,{type,payload})=>{
      state.studentEdit={...payload}
    },
    updateStudent:(state, {type,payload})=>{
    state.arrStudent=[...state.arrStudent]
    const newarr=state.arrStudent
    console.log(newarr)
    const index =state.arrStudent.find((student)=>{
      if(student.id===payload.id){
        student.name=payload.name;
        student.phone=payload.phone;
        student.email=payload.email;
      }
    })  
    },
    getStore:(state,{type,payload})=>{
      state.arrStudent=[...payload];
    },
    searchStudent:(state, {type, payload})=>{
      // console.log(payload)
      state.arrStudent=[...state.arrStudent]
      const thaocute=state.arrStudent.filter(student=>student.id===payload);
      console.log(thaocute)
    }
  }
});

export const {addStudent,deleteStudent,editStudent,updateStudent} = QuanLySinhVienReducer.actions

export default QuanLySinhVienReducer.reducer

