import React from 'react';
import {formatPrice} from '../helpers';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component{
    static propTypes ={
    }

    renderOrder = (key) =>{
        const order = this.props.order[key];
        //make sure order is loaded before continuing 
        if(!order) return null;
        return (
        <CSSTransition classNames='order' key={key} timeout={{enter:500, exit:500}}>
        <li key={key}>
            <span className='order-name'>{order.name}</span>
            <span className='order-price'>£{order.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
            <span className='order-quant'>{order.quant}</span>
            
        </li>
        </CSSTransition>
        );
    }

    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) =>{
                const order = this.props.order[key];
                return prevTotal + (order.quant * order.price);
        }, 0);
        return (
            <div className='order-wrap'>
                <h2>Order</h2>
                <ul>
                 {orderIds.map(this.renderOrder)}
                </ul>
                <p className='total'>Total: <span>£{total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></p>
            </div>
        )
    }
}

export default Order;