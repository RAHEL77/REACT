import React from 'react';
import Buttons from './Buttons';


export default class Colors extends Comment{
constructor(props){
    super(props)
    this.state=
    {Colors:['yellow','red','blue'], msg:''}
    }

showMsg=(data)=>{
    this.setState({msg:`the color is ${data}`})
}

render(){
    return(
        <>
        {this.state.Colors.map((color)=>{
            return <Buttons c={color} callva={this.showMsg}/>
        })}
        <div>{this.state.msg}</div>
        </>
    )}}