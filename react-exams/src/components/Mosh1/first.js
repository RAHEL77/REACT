import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0,
        imageUrl:'https://picsum.photos/200'
    }
   
    render() { 
        return (  <div> <img src={this.state.imageUrl} alt="" /><span  style={{fontSize:5}} className="badge badge-primary m-2">
            {this.formatCount()}</span><button className="btn btn-secondry btn-sm">submit</button> </div>)
    }
    formatCount(){
        const {count}=this.state;
        return count===0?<h1>zero</h1>:0;
}}
 
export default Counter;