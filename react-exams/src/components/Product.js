import React from 'react';
import DataStore from './dataStore';
import {Link} from 'react-router-dom';
const Product=()=>{
    return(
        <div>
            
        <div
        className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
        > <Link to='/card/baruh' className='ui header'>Baruh</Link>
          <p>PRODUCT
          </p>
        </div>
             
        <div
        className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
        > <Link to='/card/rach' className='ui header'>Rache</Link>
          <p>PRODUCT
          </p>
        </div>
        </div>
    )
}
export default Product;