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
         
               <div className="producTitle">
               {this.state.dataStore.map(e =>{
                   return <h1 key={e.id}><Link to={`/producTitle/${e.id}`} >{e.title}</Link></h1>
               } )}
             
        </div>
    )
}

}

export default Product;