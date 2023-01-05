import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



const Update = () => {
        const location = useLocation();
        const [id, setId]=useState("");
        const [pw, setPw]=useState("");
        const [mid, setMid]=useState("");
        
        useEffect(() => {
            setMid(location.state.mid);
            setId(location.state.id);

          }, [ location ])
          
       let update = ()=>{
      axios.post('/update',{
        mid: mid,
        pw: pw,
      })
      .then( (res)=>{
        console.log(res.data);
      })
    }
    return (
        
        <div>
            <h1>{id} 님의 비밀번호 변경</h1>
          <form action ="/select" onSubmit={()=>{update()}}>
            바꿀 비번 <input type="text" onChange={ (e)=>{setPw(e.target.value)} }/>
              <input type="hidden" value={mid}/>
              <input type="submit" value="확인"/>
          </form>
        </div>
    );
};

export default Update;