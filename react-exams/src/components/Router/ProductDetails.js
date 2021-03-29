import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataStore from '../../DataStore'


class ProductDetail extends Component {
    constructor(props){
        super()
        this.state = {
            dataStore : []
        }
      }
      
     
    // state = { store }


    componentDidMount = () => {
        this.setState({dataStore : DataStore})
      } 


    render() {
        const index = (this.props.match.params.id) - 1

        return (
            <div className='product'>
                        <Link to='/products'>
                    <button>back</button>
                </Link>
            </div >
)
}
}


export default ProductDetail