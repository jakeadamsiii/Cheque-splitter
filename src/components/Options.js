import React from 'react';
import PropTypes from 'prop-types';
import EvenlyForm from './EvenlyForm';
import { Link } from 'react-router-dom';

class Options extends React.Component{

    render(){
        return (
            <section className='options'>
                <p className='split-para'>How would you like to split it?</p>
                <div className='split-buttons'>
                   <button> <Link to={{ 
                        pathname: '/evenly',
                        state: this.props.order
                        }}>Evenly</Link></button>
                                       <button> <Link to={{ 
                        pathname: '/itemise',
                        state: this.props.order
                        }}>Itemise</Link></button>
                    <button>Per Person</button>
                </div>
            </section>
        )
    }

}

export default Options;