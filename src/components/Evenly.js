import React from 'react';
import PropTypes from 'prop-types';
import EvenlyForm from './EvenlyForm';

class Evenly extends React.Component{
    
    render(){
        return (
            <EvenlyForm order={this.props.location.state} />
        )
    }
}

export default Evenly;