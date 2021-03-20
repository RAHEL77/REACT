import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:0
        // imageUrl:'https://picsum.photos/200',
        // tags:['tag1','tag2','tag3']
    }
    // constructor(){
    //     super();
    //   this.handleIncrement= this.handleIncrement.bind(this);
    // }
    handleIncrement=()=>{
   
        this.setState({count:this.state.count+1})
        }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "primary" : "secondary";
    }

    formatCount(){
        const {count}=this.state;
        return count===0?<h1>zero</h1>:0;
}
// renderTags(){
    //  return this.state.tags.length===0?"no tags":`the length is:${this.state.tags.length}`;
//     if (this.state.tags.length===0) return <p>no tags</p>
//     return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}  </ul>

// }
 
    render() { 
        return (  <div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>
            {this.formatCount()}</span>
            <button onClick={this.handleIncrement}
             className="btn btn-secondary btn-sm">INCREME</button>
            {/* {this.renderTags()} */}
            </div>)
    }
   }
 
export default Counter;