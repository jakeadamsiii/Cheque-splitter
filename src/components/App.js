import React from 'react';
import ItemInput from './ItemInput';
import Order from './Order';
import Options from './Options';


class App extends React.Component{
    state = {
        orders:{}
    };

    //using local storage to store order info 
    componentDidMount(){
        const {params} = this.props.match;
        //first reinstate local storeag 
        const localStorageRef = localStorage.getItem('orders');
        if(localStorageRef){
            this.setState({orders: JSON.parse(localStorageRef) });
        }
    }

    componentDidUpdate(){
        localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }

    addItem = (order) => {
        //1. take a copy of state 
        const orders = {...this.state.orders};
        //2. add new item to order
       orders[`item${Date.now()}`] = order;
        //3. set the new fishes object to state 
       this.setState({orders});
    }

    removeFromOrder = (key) => {
        //1. take a copy of state 
        const orders = {...this.state.orders};
        //2. delete order item
        delete orders[key];
        //3. Call set state to update our state object
        this.setState({orders});
    }


    render(){
        return (
            <div className='chequlator'>
                <ItemInput addItem={this.addItem} order={this.state.orders} />
                <Order addItem={this.addItem} order={this.state.orders} removeFromOrder={this.removeFromOrder}/>
                <Options order={this.state.orders} />
            </div>
        )
    }
}

export default App;