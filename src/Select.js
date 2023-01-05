import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Select = () => {

    const [dataList, setDataList] = useState("");
    useEffect( ()=>{
        select()
    },[] );

       let select = ()=>{
      axios.get('/select',{
        
      })
      .then( (res)=>{
        let result = [];
        for (let i = 0; i < res.data.length; i++) {
          let once = res.data[i];
          result.push(
            <tr key={i+1} >
              <td>{once.mid}</td>
              <td class="table-primary">{once.id}</td>
              <td>{once.pw}</td>
              <Link to = '/update' state={{mid:once.mid , id:once.id}}>수정  </Link>
              <Link to = '/delete' state={{mid:once.mid}}>삭제</Link>
            </tr>
            );
        }
        setDataList(result);
      })
      .catch( (error) => { alert(error); return false; } );
      //e.target.value
      
    }
    return (
        <div>
            <h1>회원 개인정보</h1>
         <Table style={{width:900}}>
               <thead>
                <tr>
                   <th>번호</th>
                   <th>아이디</th>
                   <th>비번</th>
                </tr>
               </thead>
               </Table>
        <Table>
              <tbody>
               {dataList}
             </tbody>
           </Table>
        </div>
    );
};

export default Select;
