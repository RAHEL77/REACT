import React from 'react';
import DataStore from '../DataStore';
import {Link} from 'react-router-dom';

class Product extends React.Component {

constructor(props){
  super()
  this.state = {
      dataStore : []
  }
}

componentDidMount = () => {
  this.setState({dataStore : DataStore})
} 

render(){
    return(        
               <div>
               {this.state.dataStore.map(e =>{
                   return <h2><h3>{e.title}</h3></h2>
               } )}
             
        </div>
    )
}

}

export default Product;