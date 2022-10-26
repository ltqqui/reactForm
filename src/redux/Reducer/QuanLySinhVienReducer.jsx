

// const stateDefault = {
//     arrStudent: [{ id: 1, name: 'thao', phone: '0941003224', email: 'lamthanhquillll@gmail.com' }]
// }

// export const QuanLySinhVienReducer = (state = stateDefault, action) => {
//     switch (action.type) {
//         case 'ADD_STUDENT': {
//             const newArr=[...state.arrStudent,action.student]
//             state.arrStudent=newArr;
//             return{...state}
//             // console.log(action)
//         };
//         default: {
//             return { ...state}
//         }
//     }


// }
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
    }
  }
});

export const {addStudent,deleteStudent,editStudent,updateStudent} = QuanLySinhVienReducer.actions

export default QuanLySinhVienReducer.reducer

