import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Delete = () => {
    const location = useLocation();

    useEffect(() => {
        axios.post('/api/delete',{
            mid:location.state.mid
        })
        .then( (res)=>{
            })
      }, [location])

    return (
        <div>
            <h1>회원이 삭제되었습니다.</h1>
        </div>
    );
};

export default Delete;
