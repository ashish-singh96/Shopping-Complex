import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const Women = () => {
    return (
        <div className='pt-[66px]'>


            <Carousel autoPlay infiniteLoop showThumbs={true} showArrows={false} showStatus={false} showIndicators={false}>
                <Link to={'/s/50-to-80-percent-off-5427-63681'}>
                <div>
                    <img src="../Images/D-1.0-WHP-010524-mainBanner-1-iconicsale-golive.avif" />
                </div>
                </Link>
                <div>
                    <img src="../Images/D-1.0-WHP-260524-MAINBANNER-Z1-P2-MISSPLAYERS-RIO-MIN30.avif" />

                </div>
                <div>
                    <img src="../Images/D-1.0-WHP-260524-MAINBANNER-Z1-P3-RITUKUMAR-FOREVERNEW-UPTO50.avif" />

                </div>

                <div>
                    <img src="../Images/D-1.0-WHP-260524-MAINBANNER-Z1-P6-LEVIS-ONLY-MIN40.jpg" />

                </div>

                <div>
                    <img src="../Images/D-1.0-WHP-260524-MAINBANNER-Z1-P7-NIKE-adidas-UPTO40.avif" />
                </div>


            </Carousel>

        </div>
    )
}

export default Women
