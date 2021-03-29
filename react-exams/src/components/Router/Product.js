import React from 'react';
import DataStore from '../../DataStore';
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
      // Part 2
      //          <div>
      //          {this.state.dataStore.map(e =>{
      //              return <h2><h3>{e.title}</h3></h2>
      //          } )}
             
      //   </div>
    )
}

}

export default Product;