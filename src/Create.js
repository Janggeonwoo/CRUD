import axios from 'axios';
import React, { useState } from 'react';
import { Button, Input, Fade } from 'reactstrap';


const Create = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [fade, setFade] = useState(false);
     
    const toggle = () => {
      setFade(!fade);
  }
    const create = ()=>{ 
      axios.post('/api/create',{
        id:id,
        pw:pw,
      })
      .then( (res)=>{console.log(res.data);})

    }
    return (
      
        <div>
            <h1>회원가입</h1>
        <form id = "test1" onSubmit={ ()=>{create()}}>
           <Input type="text" style={{width:200}} bsSize="sm" placeholder="아이디 입력" onChange={ (e)=>{setId(e.target.value)} } /><br/>
           <Input type="text" style={{width:200}} placeholder="비밀번호 입력" onChange={ (e)=>{setPw(e.target.value)} }/>
           <input className='custom-btn btn-5' type="submit" value="등록"/><br/><br/>
         </form>

         <Button color="success" onClick={()=>{toggle()}}>사스케</Button>
         <Fade in={fade} tag="h1">
         
            미안하다 이거보여주려고 어그로 끌었다..
            <br/><br/>
            <img src={ require('./어그로.png')} alt=''/>
          </Fade>
        </div>
    );
};

export default Create;
