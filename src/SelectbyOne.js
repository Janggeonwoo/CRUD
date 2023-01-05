import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Input } from 'reactstrap';

const SelectbyOne = () => {
    const [id, setId] = useState("");
    const [dataa, setData] = useState("");
    let selectOne =()=>{
        axios.post('/selectOne',{
            id:id
          })
          .then( (res)=>{
            let result = [];
        for (let i = 0; i < res.data.length; i++) {
            let once = res.data[i];
            result.push(
                <tr key={i+1} >
              <td>{once.pw}</td>
            </tr>
            );
        }
        console.log(result);
        setData(result);
        console.log(dataa);
      })
      .catch( (error) => { alert(error); return false; } );
    }
    return (
        <div>
            <h1>비밀번호 찾기</h1>
            <form onSubmit={(e)=>{
                selectOne();
                e.preventDefault();     // 새로고침 방지
                }}>
            <Input type="text" style={{width:200}} placeholder="아이디를 입력해주세요." onChange={ (e)=>{setId(e.target.value)} } />
            <input type="submit" value="찾기"/><br/><br/>
            
            </form>
            <Table>
            <thead>
                <tr>
                    <td>비밀번호</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-warning"><font face="궁서체">{dataa}</font></td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
};

export default SelectbyOne;