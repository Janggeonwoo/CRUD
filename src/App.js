import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      id: "",
      pw:"",
      id1:"",
      pw1:"",
      dataList : undefined,
    }
  }
  f11(e){
      console.log();
    axios.post('/tiger/temp/?value=select',{
      id : this.state.id,
      pw : this.state.pw
    })
    .then( (res)=>{console.log(res.data);})
    
    //e.target.value
    console.log(1);
  }
  f12 = ()=>{
    axios.post('/tiger/temp/?value=read',{})
    .then( (res)=>{
      let result = [];
      console.log(1,res.data);
      for (let i = 0; i < res.data.length; i++) {
        let once = res.data[i];
        result.push(
          <tr key={i+1} >
            <td>{i+1}</td>
            <td>{once.id}</td>
            <td>{once.pw}</td>
          </tr>
          );
      }
      this.setState( {dataList:result} );
    })
    .catch( (error) => { alert(error); return false; } );
    //e.target.value

    
  }
  f13(){
    axios.post('/tiger/temp/?value=update',{
      id: this.state.id,
      pw: this.state.pw

    })
    .then( (res)=>{console.log(res.data);})
    //e.target.value
    console.log(1);
  }
  f14(){
    axios.post('/tiger/temp/?value=delete',{
      id: this.state.id,
      
    })
    .then( (res)=>{console.log(res.data);})
    //e.target.value
    console.log(1);
  }

  render() {
    return (
      <div>
      <h1>App</h1>
      <button onClick={ this.f8 }>클릭8</button><br/>
      <button onClick={ this.f91 }>클릭91</button><br/>
      <button onClick={ this.f92 }>클릭92</button><br/>

      <form onSubmit={ ()=>{this.f11()}}>
        <input type="text" onChange={ (e)=>{this.setState({id:e.target.value})} } />
        <input type="text" onChange={ (e)=>{this.setState({pw:e.target.value})} }/>
        
        <input type="submit" value="확인"/>
        
      </form>


      <button onClick={()=>{this.f12()}}>조회</button>


      <form onSubmit={()=>{this.f13()}}>
        <input type="text" onChange={ (e)=>{this.setState({id:e.target.value})} } />
        <input type="text" onChange={ (e)=>{this.setState({pw:e.target.value})} }/>
        <input type="submit" value="확인"/>
        
      </form>
      <form onSubmit={()=>{this.f14()}}>
        <input type="text" onChange={ (e)=>{this.setState({id:e.target.value})} }/>
        <input type="submit" value="확인"/>
        
      </form>

      <table >
          <tbody>
            {this.state.dataList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;