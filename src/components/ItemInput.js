import React from 'react';
import PropTypes from 'prop-types';

class InputItem extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    quantRef = React.createRef();

    addItem = (event) =>{
        event.preventDefault();
        const item  = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value), 
            quant: parseInt(this.quantRef.value.value)
        }
        this.props.addItem(item);
        //refresh this form
        event.currentTarget.reset(); 
    }

    render(){
        return (
            <section className='item-input'>
                <p>Input your items, with price and quantity below</p>
                <form className='item-input-form' onSubmit={this.addItem}>
                    <input name="name" type="text" placeholder='Item' ref={this.nameRef} required/>
                    <label htmlFor="price">£</label>
                    <input name="price" type="number" min="0" placeholder='Price' ref={this.priceRef} step="any" required/>
                    <input name="quant" type="number" defaultValue='1' min="1" ref={this.quantRef} step="1" required/>
                    <button type='submit'>Add</button>
                </form>
            </section>
        )
    }

}

export default InputItem;