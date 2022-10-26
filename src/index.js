import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import BaiTapForm from './component/BaiTapForm/BaiTapForm';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='baitapform' element={<BaiTapForm/>}></Route>
  </Routes>
  </BrowserRouter>
  </Provider>
);


