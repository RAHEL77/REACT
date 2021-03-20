import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0
    };

    handleIncrement=prod=>{
        console.log(prod)
    this.setState({count:this.state.count+1})};

    formatCount(){
        const {count}=this.state;
        return count===0?<h1>zero</h1>:0;
}
    render() { 
        return (  <div>
        <span className="badge m-2 badge-warning">
            {this.formatCount()}</span>
            <button onClick={()=>this.handleIncrement(prod)}
             className="btn btn-secondary btn-sm">INCREME</button>
            </div>)
    }
   }
 
export default Counter;