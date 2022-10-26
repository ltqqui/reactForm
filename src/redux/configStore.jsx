import {configureStore} from '@reduxjs/toolkit'
import  QuanLySinhVienReducer  from './Reducer/QuanLySinhVienReducer'

export const store=configureStore({
    reducer:{ 
        QuanLySinhVienReducer:QuanLySinhVienReducer
    }
})