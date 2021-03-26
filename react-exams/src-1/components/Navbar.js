import React from 'react';

const Navbar=()=>{
    return(
        <nav className='ui raised very padded segment'>
        <a className='ui teal inverted segment'> Gloria</a>
        <div className='ui right floated header'>
            <button className='ui button'><a href="/HomePage">HomePage</a></button>
            <button className='ui button'><a href="/Product">Product</a></button>
            <button className='ui button'><a href="/Header">Header</a></button>
        </div>
        </nav>
    )
}
export default Navbar;