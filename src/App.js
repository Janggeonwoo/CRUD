
import axios from 'axios';
import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Delete from './Delete';
import Select from './Select';
import SelectbyOne from './SelectbyOne';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.css'


// 기본주소 + AAA >>> BBB
// npm install --save react-cookies
class App extends Component {
  render() {
    return (
      
      <>
      <header>
   <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
    </header>
        <Link to={'/create'}>아이디 생성</Link><br/>
        <Link to={'/select'}>회원목록</Link><br/>
        <Link to={'/selectOne'}>비밀번호 찾기</Link><br/>

        <Routes>
          <Route path='/create' element = {<Create/>}/>
          <Route path='/select' element = {<Select/>}/>
          <Route path='/update' element = {<Update/>}/>
          <Route path='/delete' element = {<Delete/>}/>
          <Route path='/selectOne' element = {<SelectbyOne/>}/>
        </Routes>
      

        <button class="custom-btn btn-4"><span>Read More</span></button>

        <button>확인</button>
        
        <button class="custom-btn btn-5"><span>Read More</span></button>
      </>
    );
  }
}






export default App;
