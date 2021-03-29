import React, {useState} from 'react'
// import React, {Component, useState} from 'react'

const StateHook=(props)=>{
    const [count,setCount]=useState(1);

    return(
        <div>
            <p> Click {count} times </p>
            <button onClick={()=>setCount(count+1)}>+Click</button>
            {/* <button onClick={()=>this.setState({count:this.state.count+1})}>+Click</button> */}

        </div>
    )
}
// App.defaultProps={
//     count:5
// }
// class StateHook extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0, 
//             text:'',
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <p>click {this.state.count} times to btn </p>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>+Click</button>
//             </div>
//         )
//     }
// }
export default StateHook;