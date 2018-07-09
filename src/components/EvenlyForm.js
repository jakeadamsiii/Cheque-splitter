import React from 'react';
import PropTypes from 'prop-types';

class EvenlyForm extends React.Component{

    personRef = React.createRef();
    
    render(){
        return (
            <form className='evenlyForm'>
                <p>Total: <span class=''>{}</span></p>
                <div class='noOfPeople'>
                <label htmlFor='people'>How many people?</label>
                <input name="people" type="number" defaultValue='1' min="1" ref={this.personRef} step="1" required/>
                </div>
                <div class='addTip'>
                <label htmlFor='tip'>Add a tip?</label>
                </div>
                <div class='tipOptions'>
                <label><input type="radio" name="tip" value="0" />None</label>
                <label><input type="radio" name="tip" value="10"/>10%</label>
                <label><input type="radio" name="tip" value="12" />12%</label>
                <label><input type="radio" name="tip" value="15"/>15%</label>
                <label><input type="radio" name="tip" value="20" />20%</label>
                <label><input type="radio" name="tip" value="" />Other <input  type="number" min="1" name='cutom-tip' step="1"/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​%</label>
                </div>
                <button type='submit'>Calculate</button>
            </form>
        )
    }
}

export default EvenlyForm;