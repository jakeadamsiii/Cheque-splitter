import React from 'react';
import PropTypes from 'prop-types';
import EvenlyForm from './EvenlyForm';

class Options extends React.Component{

    render(){
        return (
            <section className='options'>
                <p className='split-para'>How would you like to split it?</p>
                <div className='split-buttons'>
                <a href='/evenly'><button>Evenly</button></a>
                    <button>Itemise</button>
                    <button>Per Person</button>
                </div>
            </section>
        )
    }

}

export default Options;