import React, {Component} from 'react';
export default class Buttons extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state={
            color:this.props.c
        }
    }

    showColor=(e)=>{
        this.props.callabe(e.target.value)
    }
    render(){
        return(
            <div>
                {this.state.color}
                <button className={this.state.color} value={this.state.color} onClick={this.showColor}>
               
                </button>
            </div>
        )
        }
}

export default Buttons;