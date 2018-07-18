import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';
import People from './People';

class Itemise extends React.Component{
    
    render(){
        return (
            <section className='itemiseForm'>
                <People/>
                <Order order={this.props.location.state}/>
            </section>
        )
    }
}

export default Itemise; 