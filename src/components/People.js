import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class People extends React.Component{
    
    render(){
        function fadeForm(e){
            e.preventDefault(); 
            const peopleform = document.querySelector('.itemiseForm form');
            const numOfPeople = document.querySelector('input[name="people"]').value;
            let n = numOfPeople;
            return n;
            //peopleform.classList.add('fadeOut');
        }

        return (
            <section className='people-wrap'>
            <form>
            <label htmlFor='people'>How many people?</label>
            <input name="people" type="number" defaultValue='1' min="1" ref={this.personRef} step="1" required/>
            <button onClick={fadeForm} className='button'>Let's go</button>
            </form>
                <p className='people-num'><span></span>People</p>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={10}
                    totalSlides={()=>{
                       return document.querySelector('input[name="people"]').value;
                    }}
                >        
                    <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            </section>
        )
    }
}

export default People; 