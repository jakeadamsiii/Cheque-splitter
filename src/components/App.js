import React from 'react';
import ItemInput from './ItemInput';
import Order from './Order';
import Options from './Options';


class App extends React.Component{
    state = {
        orders:{}
    };

    addItem = (order) => {
        //1. take a copy of state 
        const orders = {...this.state.orders};
        console.log(orders);
        //2. add new item to order
       orders[`item${Date.now()}`] = order;
        //3. set the new fishes object to state 
       this.setState({orders}); 
    }


    render(){
        return (
            <div className='chequlator'>
                <ItemInput addItem={this.addItem} order={this.state.orders} />
                <Order addItem={this.addItem} order={this.state.orders} />
                <Options order={this.state.orders}/>
            </div>
        )
    }
}

export default App;