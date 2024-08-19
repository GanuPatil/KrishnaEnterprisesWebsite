import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MainCarousel.css';


const MainCarousel = () => {
    const items = mainCarouselData.map((item) => < img className = 'cursor-pointer'
        role = 'presentation'
        src = { item.image }
        alt = " "
        style = {
            {
                width: 'calc(100% - 20px)', // Decreasing the width to add space
                // height: '120vh',
                objectFit: 'cover',
                marginLeft: '10px', // Adding space on the left
                marginRight: '10px',
            }
        }
        / > 
    )

    return ( <
        div style = {
            { marginTop: '10px' } } > { /* Added margin-top to create space between navbar and carousel */ } <
        AliceCarousel items = { items }
        mouseTracking disableButtonsControls autoPlay autoPlayInterval = { 1500 }
        infinite / >
        <
        /div>
    )
}
export default MainCarousel