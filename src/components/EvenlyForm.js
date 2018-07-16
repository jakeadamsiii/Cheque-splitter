import React from 'react';
import PropTypes from 'prop-types';

class EvenlyForm extends React.Component{

    personRef = React.createRef();

    render(){
        const order = this.props.order;
        const orderIds = Object.keys(order);
        const total = orderIds.reduce((prevTotal, key) =>{
                const orderer = order[key];
                return prevTotal + (orderer.quant * orderer.price);
        }, 0);

        function splitEvenly(e){
            e.preventDefault(); 
            const numOfPeople = document.querySelector('input[name="people"]').value;
            const tip = document.querySelector('.tipOptions input:checked').value;
            const totalPlusTip = total + (total * (parseInt(tip)/100));
            const owed = totalPlusTip / parseInt(numOfPeople);
            const finalValue = owed.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            document.querySelector('.owed span').innerHTML = '£' + finalValue;
            document.querySelector('.owed').classList.add('active');
        }

        function setTip() {
            document.getElementById("rbother").value = document.getElementById("rbother2").value;
            document.getElementById("rbother").checked = true;
            if(parseInt(document.getElementById("rbother2").value) >= 30){
                document.querySelector('.moneybags i').classList.remove('em-dollar');
                document.querySelector('.moneybags i').classList.add('em-moneybag');
            }else{
                document.querySelector('.moneybags i').classList.add('em-dollar');
                document.querySelector('.moneybags i').classList.remove('em-moneybag');
            }
        }


        return (
            <form className='evenlyForm'>
                <p className='total'>Total: <span>£{total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></p>
                <div className='noOfPeople'>
                <label htmlFor='people'>How many people?</label>
                <input name="people" type="number" defaultValue='1' min="1" ref={this.personRef} step="1" required/>
                </div>
                <div className='addTip'>
                <label htmlFor='tip'>Add a tip?</label>
                </div>
                <div className='tipOptions'>
                    <label className='dollarSwitch'><input type="radio" name="tip" value="0" required/><i class="em em-dollar"></i>None</label>
                    <label className='dollarSwitch'><input type="radio" name="tip" value="10" defaultChecked/><i class="em em-dollar"></i> 10%</label>
                    <label className='dollarSwitch'><input type="radio" name="tip" value="12" /><i class="em em-dollar"></i> 12%</label>
                    <label className='dollarSwitch'><input type="radio" name="tip" value="15"/><i class="em em-dollar"></i> 15%</label>
                    <label className='dollarSwitch'><input type="radio" name="tip" value="20" /><i class="em em-dollar"></i> 20%</label>
                    <label className='dollarSwitch moneybags'>
                        <input id='rbother' type="radio" name="tip" value="0" /> <i class="em em-dollar"></i> Other 
                        <input id='rbother2' type="number" defaultValue='0' min="1" name='cutom-tip' step="1" onInput={setTip}/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​%
                    </label>
                </div>
                <button onClick={splitEvenly}>Calculate</button>
                <p className='owed'>You each owe: <span></span></p>
            </form>
        )
    }
}

export default EvenlyForm;