import React from 'react';
import PropTypes from 'prop-types';

class EvenlyForm extends React.Component{

    personRef = React.createRef();
    
    render(){
        return (
            <form className='evenlyForm'>
                <label htmlFor='people'>How many people?</label>
                <input name="people" type="number" defaultValue='1' min="1" ref={this.personRef} step="1" required/>
                <label htmlFor='tip'>Add a tip?</label>
                <input type="radio" name="tip" value="0"/>None
                <input type="radio" name="tip" value="10"/>10%
                <input type="radio" name="tip" value="12" />12%
                <input type="radio" name="tip" value="15" />15%
                <input type="radio" name="tip" value="20" />20%
                <input type="radio" name="tip" value="other" />Other <input  type="number" min="1" name='cutom-tip' step="1"/>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
                <button type='submit'>Calcualte</button>
            </form>
        )
    }
}

export default EvenlyForm;