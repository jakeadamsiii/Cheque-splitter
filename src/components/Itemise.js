import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';

class Itemise extends React.Component{
    
    render(){
        return (
            <section className='itemiseForm'>
                <form>
                    <label htmlFor='people'>How many people?</label>
                    <input name="people" type="number" defaultValue='1' min="1" ref={this.personRef} step="1" required/>
                </form>
                <Order order={this.props.location.state}/>
            </section>
        )
    }
}

export default Itemise; 