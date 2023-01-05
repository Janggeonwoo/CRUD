
import axios from 'axios';
import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Delete from './Delete';
import Select from './Select';
import SelectbyOne from './SelectbyOne';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap';

// 기본주소 + AAA >>> BBB
// npm install --save react-cookies
class App extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}






export default App;
